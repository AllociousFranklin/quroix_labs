// @ts-nocheck
"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────── helpers ─────────────────────── */

// Convert lat/lng to 3D position on a sphere
function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

/* ─────────────────────── earth sphere ─────────────────────── */

function Earth({ radius }) {
    const meshRef = useRef(null);

    // Load real earth textures
    const [dayMap, nightMap, bumpMap] = useTexture([
        "/textures/earth_day.jpg",
        "/textures/earth_night.jpg",
        "/textures/earth_topology.png",
    ]);

    // Custom shader for dark earth with city lights
    const uniforms = useMemo(
        () => ({
            uDayMap: { value: dayMap },
            uNightMap: { value: nightMap },
            uBumpMap: { value: bumpMap },
        }),
        [dayMap, nightMap, bumpMap]
    );

    const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    uniform sampler2D uDayMap;
    uniform sampler2D uNightMap;
    uniform sampler2D uBumpMap;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Sample textures
      vec4 dayColor = texture2D(uDayMap, vUv);
      vec4 nightColor = texture2D(uNightMap, vUv);

      // Convert day map to grayscale (removes blue ocean tint)
      float dayLum = dot(dayColor.rgb, vec3(0.299, 0.587, 0.114));

      // Detect ocean: blue channel dominates in ocean areas
      float blueRatio = dayColor.b / (max(dayLum, 0.01));
      float isOcean = smoothstep(1.2, 1.8, blueRatio);

      // Land: very subtle dark grey. Ocean: pure black.
      float landBrightness = dayLum * 0.04 * (1.0 - isOcean);
      vec3 darkEarth = vec3(landBrightness);

      // City lights from night map
      vec3 cityLights = nightColor.rgb * 1.0;

      // Combine
      vec3 finalColor = darkEarth + cityLights;

      // Glossy specular highlight (tight, white, from upper-left)
      vec3 lightDir = normalize(vec3(-0.5, 0.9, 0.6));
      vec3 viewDir = normalize(-vPosition);
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(vNormal, halfDir), 0.0), 80.0);
      finalColor += vec3(0.7, 0.72, 0.75) * spec * 0.6;

      // Very subtle rim
      float rimFactor = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
      finalColor += vec3(0.08, 0.1, 0.14) * pow(rimFactor, 4.0) * 0.2;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[radius, 64, 64]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={false}
            />
        </mesh>
    );
}

/* ─────────────────────── atmosphere glow ─────────────────────── */

function Atmosphere({ radius }) {
    const vertexShader = `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
      gl_FragColor = vec4(0.25, 0.3, 0.45, 1.0) * intensity * 0.35;
    }
  `;

    return (
        <mesh scale={[1.12, 1.12, 1.12]}>
            <sphereGeometry args={[radius, 64, 64]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}

/* ─────────────────────── location marker ─────────────────────── */

function LocationMarker({ lat, lng, radius, label, coordinates }) {
    const glowRef = useRef(null);
    const position = latLngToVector3(lat, lng, radius);

    useFrame((state) => {
        if (glowRef.current) {
            const t = state.clock.elapsedTime;
            glowRef.current.intensity = 1.5 + Math.sin(t * 3) * 0.8;
        }
    });

    return (
        <group position={position}>
            {/* Glowing pin dot */}
            <mesh>
                <sphereGeometry args={[0.035, 16, 16]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#7c3aed"
                    emissiveIntensity={3}
                    toneMapped={false}
                />
            </mesh>

            {/* Outer glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.05, 0.075, 32]} />
                <meshBasicMaterial
                    color="#a78bfa"
                    transparent
                    opacity={0.4}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Second larger glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.08, 0.1, 32]} />
                <meshBasicMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.15}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Point light for local glow */}
            <pointLight
                ref={glowRef}
                color="#8b5cf6"
                intensity={1.5}
                distance={0.8}
                decay={2}
            />

            {/* HTML Label */}
            <Html
                position={[0.15, 0.05, 0]}
                style={{ pointerEvents: "none", userSelect: "none" }}
                distanceFactor={3}
            >
                <div
                    style={{
                        background: "rgba(8, 8, 12, 0.85)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        padding: "8px 14px",
                        whiteSpace: "nowrap",
                        minWidth: "140px",
                    }}
                >
                    <p
                        style={{
                            color: "white",
                            fontSize: "11px",
                            fontWeight: 600,
                            margin: 0,
                            letterSpacing: "0.02em",
                            fontFamily: "inherit",
                        }}
                    >
                        {label}
                    </p>
                    <p
                        style={{
                            color: "rgba(255, 255, 255, 0.4)",
                            fontSize: "9px",
                            fontWeight: 400,
                            margin: "3px 0 0 0",
                            letterSpacing: "0.03em",
                            fontFamily: "inherit",
                        }}
                    >
                        {coordinates}
                    </p>
                </div>
            </Html>
        </group>
    );
}

/* ─────────────────────── main globe scene ─────────────────────── */

function GlobeScene() {
    const globeGroupRef = useRef(null);
    const earthRadius = 1.5;

    return (
        <>
            {/* Very subtle ambient light */}
            <ambientLight intensity={0.08} color="#304060" />

            {/* OrbitControls: auto-rotate + user drag interaction */}
            <OrbitControls
                autoRotate
                autoRotateSpeed={4.5}
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                minPolarAngle={Math.PI * 0.3}
                maxPolarAngle={Math.PI * 0.7}
            />

            <group ref={globeGroupRef} rotation={[0.2, -0.8, 0]}>
                {/* Earth with real textures */}
                <Earth radius={earthRadius} />

                {/* Atmosphere glow rim */}
                <Atmosphere radius={earthRadius} />

                {/* Chennai, India */}
                <LocationMarker
                    lat={13.0827}
                    lng={80.2707}
                    radius={earthRadius + 0.02}
                    label="Chennai, India"
                    coordinates="13.0827° N, 80.2707° E"
                />

                {/* New York, USA */}
                <LocationMarker
                    lat={40.7128}
                    lng={-74.006}
                    radius={earthRadius + 0.02}
                    label="New York, USA"
                    coordinates="40.7128° N, 74.0060° W"
                />

                {/* London, UK */}
                <LocationMarker
                    lat={51.5074}
                    lng={-0.1278}
                    radius={earthRadius + 0.02}
                    label="London, UK"
                    coordinates="51.5074° N, 0.1278° W"
                />

                {/* Dubai, UAE */}
                <LocationMarker
                    lat={25.2048}
                    lng={55.2708}
                    radius={earthRadius + 0.02}
                    label="Dubai, UAE"
                    coordinates="25.2048° N, 55.2708° E"
                />
            </group>
        </>
    );
}

/* ─────────────────────── exported canvas wrapper ─────────────────────── */

export default function ContactGlobe() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4.2], fov: 40 }}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
            }}
            gl={{
                antialias: true,
                alpha: true,
                toneMapping: THREE.NoToneMapping,
            }}
        >
            <GlobeScene />
        </Canvas>
    );
}

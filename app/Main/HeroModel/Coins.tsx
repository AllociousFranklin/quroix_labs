// @ts-nocheck
import { Center, Instance, Instances, MeshDistortMaterial, Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import React from "react";

const radius = 2.2;
const count = 12;

function Blade(props: GroupProps) {
  const ref = useRef<THREE.Group>(null);
  return (
    <group {...props}>
      <group ref={ref}>
        <Instance />
      </group>
    </group>
  );
}

function CeremonialCoin() {
  const tiltRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Outer group: tilt flat face toward camera (Z-axis)
    if (tiltRef.current) {
      tiltRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.4) * 0.1;
    }

    // Inner group: spin around the coin's own face-normal axis (Y after parent tilt)
    if (spinRef.current) {
      spinRef.current.rotation.y = t * 0.5;
    }

    // Pulsing glow effect
    if (glowRef.current) {
      glowRef.current.intensity = 2.5 + Math.sin(t * 2) * 1.2;
    }
  });

  const silver = "#C0C0C0";
  const silverBright = "#E8E8E8";

  return (
    // Outer group: locks flat face toward the camera
    <group ref={tiltRef}>
      {/* Inner group: spins the coin in its own plane */}
      <group ref={spinRef}>
        {/* Glow point light emanating from the coin */}
        <pointLight
          ref={glowRef}
          color="#b0c4de"
          intensity={2.5}
          distance={6}
          decay={2}
        />

        {/* Base Coin Body - Silver */}
        <mesh>
          <cylinderGeometry args={[0.8, 0.8, 0.12, 64]} />
          <meshStandardMaterial
            color={silver}
            metalness={1}
            roughness={0.08}
            emissive="#4a6a8a"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Inner bevel ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.03, 16, 100]} />
          <meshStandardMaterial
            color={silverBright}
            metalness={1}
            roughness={0.05}
            emissive="#6a8aaa"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Outer rim */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.78, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={silverBright}
            metalness={1}
            roughness={0.05}
            emissive="#7a9aba"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Distorted glow rim */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.04, 16, 100]} />
          <MeshDistortMaterial
            color={silverBright}
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            distort={0.15}
            speed={1.5}
            emissive="#8ab0d0"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* FRONT Deep Engraved Text */}
        <group position={[0, 0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[0.9, 0.3]} />
            <meshStandardMaterial
              color="#050505"
              metalness={0.3}
              roughness={1}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Text
            font="/fonts/SF PRO DISPLAY 700.ttf"
            fontSize={0.22}
            letterSpacing={0.08}
            anchorX="center"
            anchorY="middle"
          >
            QUROIX
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.9}
              roughness={0.95}
              emissive="#000000"
              emissiveIntensity={0}
            />
          </Text>
        </group>

        {/* BACK Deep Engraved Text */}
        <group position={[0, -0.065, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[0.9, 0.3]} />
            <meshStandardMaterial
              color="#050505"
              metalness={0.3}
              roughness={1}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Text
            font="/fonts/SF PRO DISPLAY 700.ttf"
            fontSize={0.22}
            letterSpacing={0.08}
            anchorX="center"
            anchorY="middle"
          >
            QUROIX
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.9}
              roughness={0.95}
              emissive="#000000"
              emissiveIntensity={0}
            />
          </Text>
        </group>
      </group>
    </group>
  );
}

export const Item3 = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= delta * 2;
    }
  });

  return (
    <Center>
      <group scale={0.7} rotation={[0, 0, 0]}>

        {/* ENGINE CORE */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.2]}>
          <cylinderGeometry args={[1.2, 1.2, 0.5, 32]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.2}
            emissive="#0d0d1a"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Light inside the core to illuminate it */}
        <pointLight
          position={[0, 0, 0.3]}
          color="#8090b0"
          intensity={3}
          distance={3}
          decay={2}
        />

        {/* TURBINE BLADES */}
        <group ref={groupRef}>
          <Instances>
            <boxGeometry args={[1.8, 0.5, 0.05]} />
            <meshStandardMaterial
              color="#eef"
              metalness={0.8}
              roughness={0.1}
              emissive="#111"
            />

            {Array.from({ length: count }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / count;
              return (
                <Blade
                  key={i}
                  position={[
                    radius * Math.cos(angle),
                    radius * Math.sin(angle),
                    0,
                  ]}
                  rotation={[0.5, 0, angle]}
                />
              );
            })}
          </Instances>
        </group>

        {/* Silver Coin - Centered in turbine */}
        <group position={[0, 0, 0]}>
          <CeremonialCoin />
        </group>

      </group>
    </Center>
  );
};
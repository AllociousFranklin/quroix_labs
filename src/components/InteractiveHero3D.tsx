
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate random particles
    const particlesCount = 2000;
    const positions = useMemo(() => {
        const array = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            array[i * 3] = (Math.random() - 0.5) * 10; // x
            array[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            array[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return array;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotate the entire field slowly
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;

            // Mouse interaction (gentle sway)
            const { mouse } = state;
            ref.current.rotation.x += (mouse.y * 0.5 - ref.current.rotation.x) * 0.05;
            ref.current.rotation.y += (mouse.x * 0.5 - ref.current.rotation.y) * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#6366f1" // Indigo-500
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function InteractiveHero3D() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full" role="img" aria-label="Interactive 3D particle field representing a neural network">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}

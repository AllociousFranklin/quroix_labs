"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const InteractiveGrid = ({ mouseRef }) => {
  const meshRef = useRef();
  const rows = 35;
  const cols = 35;

  useFrame((state) => {
    if (!meshRef.current) return;
    const { clock } = state;
    const time = clock.getElapsedTime();
    const geom = meshRef.current.geometry;
    const position = geom.attributes.position;

    // Map mouse coordinates to 3D grid bounds
    const mx = mouseRef.current.x * 7;
    const my = mouseRef.current.y * 7;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      // Background organic wave simulation
      const distanceToCenter = Math.sqrt(x * x + y * y);
      const wave = Math.sin(distanceToCenter * 0.4 - time * 1.2) * 0.35;

      // Proximity wave distortion from mouse cursor
      const distToMouse = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
      const mouseDisplacement = Math.max(0, 1.5 - distToMouse * 0.45) * 0.9;

      // Offset Z (which acts as depth/height since plane is rotated)
      position.setZ(i, wave + mouseDisplacement);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20, rows, cols]} />
      <meshBasicMaterial
        color="#444444" // Neutral dark grey
        wireframe
        transparent
        opacity={0.22}
      />
    </mesh>
  );
};

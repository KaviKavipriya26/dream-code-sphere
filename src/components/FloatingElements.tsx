
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, shape }: { position: [number, number, number]; color: string; shape: "sphere" | "box" | "torus" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent = shape === "sphere" ? Sphere : shape === "box" ? Box : Torus;
  const shapeProps = shape === "torus" ? { args: [0.5, 0.2, 16, 32] } : { args: [0.5, 0.5, 0.5] };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent ref={meshRef} position={position} {...shapeProps}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </ShapeComponent>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <Canvas className="absolute inset-0 -z-20">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShape position={[-3, 2, 0]} color="#3b82f6" shape="sphere" />
      <FloatingShape position={[3, -1, 0]} color="#6366f1" shape="box" />
      <FloatingShape position={[0, 3, -2]} color="#8b5cf6" shape="torus" />
      <FloatingShape position={[-2, -2, 1]} color="#06b6d4" shape="sphere" />
    </Canvas>
  );
};

export default FloatingElements;

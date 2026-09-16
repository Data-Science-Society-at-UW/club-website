import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CrystalObject() {
  const group = useRef<THREE.Group>(null);
  const crystal = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useFrame((state, delta) => {
    if (!group.current || !crystal.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.13, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, pointer.current.x * -0.08, 0.04);
    crystal.current.position.y = Math.sin(state.clock.elapsedTime * 0.72) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh ref={crystal} castShadow receiveShadow>
        <octahedronGeometry args={[1.18, 2]} />
        <meshPhysicalMaterial color="#7d56a2" roughness={0.2} metalness={0.24} clearcoat={0.8} clearcoatRoughness={0.2} transmission={0.06} transparent opacity={0.96} />
      </mesh>
      <mesh scale={1.04} rotation={[0.38, 0.4, 0]}>
        <octahedronGeometry args={[1.18, 1]} />
        <meshBasicMaterial color="#d6b477" wireframe transparent opacity={0.38} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.08, 0.42]}>
        <torusGeometry args={[1.58, 0.009, 14, 160]} />
        <meshBasicMaterial color="#d6b477" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[0.72, 0.12, -0.35]}>
        <torusGeometry args={[1.82, 0.006, 12, 160]} />
        <meshBasicMaterial color="#bfa0dc" transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const values = new Float32Array(18 * 3);
    for (let i = 0; i < values.length; i += 3) {
      values[i] = (Math.random() - 0.5) * 5.3;
      values[i + 1] = (Math.random() - 0.5) * 4.4;
      values[i + 2] = (Math.random() - 0.5) * 2.8 - 0.7;
    }
    return values;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#dfc796" size={0.028} transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

export function AmethystHeroScene() {
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="amethyst-scene" data-hero-scene aria-hidden="true">
      <div className="amethyst-scene-glow" />
      {reducedMotion ? <div className="amethyst-scene-fallback" /> : (
        <Canvas fallback={<div className="amethyst-scene-fallback" />} dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.75} color="#d4c2ef" />
            <directionalLight position={[2, 3, 4]} intensity={2.2} color="#f2d7a3" />
            <pointLight position={[-2, -1, 2]} intensity={4} distance={6} color="#8a5ab5" />
            <CrystalObject />
            <ParticleField />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

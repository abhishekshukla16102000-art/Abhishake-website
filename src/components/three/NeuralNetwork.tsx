'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const NODE_COUNT = 140;
const CONNECTION_DISTANCE = 1.8;

const colorPalette = [
  new THREE.Color('#0284c7'), // Sky 600
  new THREE.Color('#38bdf8'), // Sky 400
  new THREE.Color('#94a3b8'), // Slate 400
  new THREE.Color('#cbd5e1'), // Slate 300
];

function Network() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const { positions, colors, sizes, connections, nodeVectors, originalPositions } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const col = new Float32Array(NODE_COUNT * 3);
    const siz = new Float32Array(NODE_COUNT);
    const nodeVectors: THREE.Vector3[] = [];
    const originalPositions: THREE.Vector3[] = [];

    // Generate nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      // Random position in a larger sphere radius
      const radius = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      nodeVectors.push(new THREE.Vector3(x, y, z));
      originalPositions.push(new THREE.Vector3(x, y, z));

      // Colors
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      // Sizes (smaller for professional look)
      siz[i] = 0.01 + Math.random() * 0.03;
    }

    // Connections are generated dynamically in useFrame for interactivity
    return {
      positions: pos,
      colors: col,
      sizes: siz,
      connections: new Float32Array(NODE_COUNT * NODE_COUNT * 6), // Max possible connections
      nodeVectors,
      originalPositions
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (meshRef.current && linesRef.current) {
      const time = state.clock.elapsedTime;
      const mouseX = (mouse.x * state.viewport.width) / 2;
      const mouseY = (mouse.y * state.viewport.height) / 2;
      const mousePos = new THREE.Vector3(mouseX, mouseY, 0);

      // Repel and update positions
      let connectionIndex = 0;
      
      for (let i = 0; i < NODE_COUNT; i++) {
        const orig = originalPositions[i];
        const vec = nodeVectors[i];
        
        // Float effect
        const floatOffsetY = Math.sin(time * 0.5 + i) * 0.2;
        const floatOffsetX = Math.cos(time * 0.5 + i) * 0.2;
        
        // Target position
        let targetX = orig.x + floatOffsetX;
        let targetY = orig.y + floatOffsetY;
        const targetZ = orig.z;
        
        // Mouse repel effect
        // Project node to screen space roughly
        const nodeScreenPos = vec.clone();
        const dist = nodeScreenPos.distanceTo(mousePos);
        
        if (dist < 2.5) {
          const force = (2.5 - dist) * 0.5;
          const dir = nodeScreenPos.clone().sub(mousePos).normalize();
          targetX += dir.x * force;
          targetY += dir.y * force;
        }
        
        // Spring back
        vec.x += (targetX - vec.x) * 0.05;
        vec.y += (targetY - vec.y) * 0.05;
        vec.z += (targetZ - vec.z) * 0.05;
        
        dummy.position.copy(vec);
        // Pulse size
        dummy.scale.setScalar(sizes[i] * (1 + Math.sin(time * 2 + i) * 0.2));
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
      
      // Update lines based on new positions
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          if (nodeVectors[i].distanceTo(nodeVectors[j]) < CONNECTION_DISTANCE) {
            connections[connectionIndex++] = nodeVectors[i].x;
            connections[connectionIndex++] = nodeVectors[i].y;
            connections[connectionIndex++] = nodeVectors[i].z;
            connections[connectionIndex++] = nodeVectors[j].x;
            connections[connectionIndex++] = nodeVectors[j].y;
            connections[connectionIndex++] = nodeVectors[j].z;
          }
        }
      }
      
      const geom = linesRef.current.geometry as THREE.BufferGeometry;
      geom.setDrawRange(0, connectionIndex / 3);
      geom.attributes.position.needsUpdate = true;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 16, 16]}>
          <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
        </sphereGeometry>
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.4]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ambientLight intensity={0.5} />
        <Network />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

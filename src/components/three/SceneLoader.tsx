'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const NeuralNetwork = dynamic(() => import('./NeuralNetwork'), {
  ssr: false,
  loading: () => <LoadingState />
});

function LoadingState() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent z-0">
      <div className="w-16 h-16 border-4 border-[#0284c7]/20 border-t-[#0284c7] rounded-full animate-spin"></div>
    </div>
  );
}

function FallbackState() {
  return (
    <div className="absolute inset-0 bg-transparent overflow-hidden z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300/5 via-transparent to-transparent"></div>
    </div>
  );
}

export default function SceneLoader() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === null) return <LoadingState />;
  if (!hasWebGL) return <FallbackState />;

  return <NeuralNetwork />;
}

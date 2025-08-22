import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const EarthGlobe = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]}>
      <meshStandardMaterial
        color="#2563eb"
        roughness={0.3}
        metalness={0.1}
        wireframe={false}
      />
    </Sphere>
  );
};

const Globe = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Interactive
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Globe</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our global reach and impact. This interactive 3D globe will expand to show our workshops and partnerships worldwide.
          </p>
        </div>
      </div>

      {/* Globe Canvas */}
      <div className="flex-1 w-full h-[600px] relative">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <EarthGlobe />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      {/* Controls Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            Drag to rotate • Scroll to zoom • Coming soon: Workshop locations and impact data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Globe;
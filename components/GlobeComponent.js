import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Mesh } from 'three';

const EarthGlobe = () => {
  const meshRef = useRef(null);

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshPhongMaterial
        color="#00ffff"
        transparent={true}
        opacity={0.8}
        shininess={100}
        emissive="#008080"
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </Sphere>
  );
};

const GlobeComponent = () => {
  useEffect(() => {
    // Handle canvas resize
    const handleResize = () => {
      // The Canvas component from @react-three/fiber automatically handles
      // resizing when the container size changes. You can add custom resize
      // logic here if needed for specific globe options.
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="globe-container">
      {/* 
        Globe customization options:
        - Change the sphere color by modifying the meshStandardMaterial color prop
        - Adjust camera position in the Canvas camera prop
        - Modify auto-rotation speed with autoRotateSpeed
        - Change min/max zoom distances with minDistance/maxDistance
        - Add texture to the sphere by using a map prop in meshStandardMaterial
      */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
        style={{ width: '100%', height: '100vh' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
        <pointLight position={[-10, -10, 10]} color="#008080" intensity={1} />
        <EarthGlobe />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
      
      {/* Controls info overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm">
          <p>Drag to rotate • Scroll to zoom • Coming soon: Workshop locations and impact data</p>
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { div } from "framer-motion/client";

function Model(props) {
  const { scene } = useGLTF("/model.glb");
  return <primitive object={scene} scale={0.8} {...props} />;
}

const ModelViewer = () => {
  return (
    <div >
      <div  className=' rounded-full bg-["#d3d3d3"]  w-full h-[45vw] flex justify-center items-center'>
        <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      // style={{ background: "#d3d3d3", width: "100%", height: "100%" }}
    >
      {/* Background color */}
      <color attach="background" args={["#d3d3d3"]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Orbit Controls styled like Google’s 3D viewer */}
      <OrbitControls
  enablePan={true}
  enableZoom={false}        // Disable zoom on scroll
  enableRotate={true}
  autoRotate={true}         // Enable auto rotate
  autoRotateSpeed={1}       // Adjust speed as needed
  zoomSpeed={0.8}
  panSpeed={0.8}
  rotateSpeed={0.8}
  dampingFactor={0.05}
  enableDamping={true}
/>

    </Canvas>
      </div>
    
    </div>
  );
};

export default ModelViewer;

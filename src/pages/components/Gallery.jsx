import React, { useState, useEffect } from "react";

import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { fetchArtwork } from "@/services";

const Gallery = () => {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const artworkData = await fetchArtwork();
      setArtwork(artworkData);
    };

    fetchData();
  }, []);

  return (
    <Canvas
      shadows
      style={{ height: "100vh", width: "100vw", background: "black" }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <PerspectiveCamera
          makeDefault
          fov={100}
          position={[0, 35, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <color args={[0, 0, 0]} attach="background" />
        <directionalLight color={[0.8, 0.8, 0.95]} />
      </Suspense>
    </Canvas>
  );
};

export default Gallery;

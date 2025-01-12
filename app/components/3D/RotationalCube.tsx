"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const RotationalCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = 400; // Set cube container width
    const height = 400; // Set cube container height

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4; // Adjust camera to fit the larger cube

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Create cube with "Hello World" texture on each face
    const geometry = new THREE.BoxGeometry();
    const materials = createTextMaterials([
      "Hello",
      "World",
      "from",
      "Glenn",
      "Tanze",
      "Builder",
    ]);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Helper function to create materials for each face of the cube
  const createTextMaterials = (texts: string[]) => {
    return texts.map((text) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;
      canvas.width = 612; // Higher resolution for clearer text
      canvas.height = 612;

      context.fillStyle = "#000000"; // Black background
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#ffffff"; // White text
      context.font = "70px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.MeshBasicMaterial({ map: texture });
    });
  };

  return <div ref={mountRef} style={{ width: "400px", height: "400px" }} />;
};

export default RotationalCube;

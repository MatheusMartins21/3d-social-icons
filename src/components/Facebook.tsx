/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 facebook.gltf -t
*/

import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Curve007: THREE.Mesh;
    Curve007_1: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
    facebook: THREE.MeshStandardMaterial;
  };
};

const Facebook = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("facebook.gltf") as GLTFResult;

  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        geometry={nodes.Curve007.geometry}
        material={materials["default"]}
      />
      <mesh
        geometry={nodes.Curve007_1.geometry}
        material={materials.facebook}
      />
    </group>
  );
};

export default Facebook;

useGLTF.preload("facebook.gltf");

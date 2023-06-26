/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 twitter.gltf -t
*/

import { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    twitter_icon_1: THREE.Mesh
    twitter_icon_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    twitter: THREE.MeshStandardMaterial
  }
};

const Twitter = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('twitter.gltf') as GLTFResult

  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  });

  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.twitter_icon_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.twitter_icon_2.geometry} material={materials.twitter} />
      </group>
    </group>
  );
};

export default Twitter;

useGLTF.preload('twitter.gltf');
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'

import { Setup } from '../Setup'
import { draco } from '../../src/loaders/draco'

export default {
  title: 'Loaders/draco',
  component: DracoScene,
  decorators: [(storyFn) => <Setup cameraPosition={[0, 0, 5]}>{storyFn()}</Setup>],
}

function Suzanne() {
  const { nodes, materials } = useLoader(GLTFLoader, 'suzanne.glb', draco('draco-gltf/'))

  return (
    <group dispose={null}>
      <mesh material={materials['Material.001']} geometry={nodes.Suzanne.geometry} />
    </group>
  )
}

function DracoScene() {
  return (
    <Suspense fallback={null}>
      <Suzanne />
    </Suspense>
  )
}

export const DracoSceneSt = () => <DracoScene />
DracoSceneSt.story = {
  name: 'Default',
}

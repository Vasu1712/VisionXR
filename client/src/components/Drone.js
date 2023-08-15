import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Model from './Model'

export default function Drone() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}
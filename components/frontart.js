import * as THREE from 'three'
import React, {  Suspense, useState, useRef } from 'react'
import { Canvas, useFrame, createPortal } from '@react-three/fiber'
import { useGLTF, Stage, Sky, Stars, useFBO, OrbitControls, rotation, PerspectiveCamera, CameraShake, ContactShadows } from '@react-three/drei'
import {  Beer, Concha, Angel, Plant } from './models'




function MagicMirror({ children, ...props }) {
  const cam = useRef()
  // useFBO creates a WebGL2 buffer for us, it's a helper from the "drei" library
  const fbo = useFBO()
  // The is a separate scene that we create, React will portal into that
  const [scene] = useState(() => new THREE.Scene())
  // Tie this component into the render-loop
  useFrame((state) => {
    // Our portal has its own camera, but we copy the originals world matrix
    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse)
    // Then we set the render-target to the buffer that we have created
    state.gl.setRenderTarget(fbo)
    // We render the scene into it, using the local camera that is clamped to the planes aspect ratio
    state.gl.render(scene, cam.current)
    // And flip the render-target to the default again
    state.gl.setRenderTarget(null)
  })
  return (

    <>

   
      <mesh {...props}>
        <planeGeometry args={[4, 8]} />
        {/* The "mirror" is just a boring plane, but it receives the buffer texture */}
        <meshBasicMaterial map={fbo.texture} />
      </mesh>
    
      <PerspectiveCamera manual ref={cam} fov={150} aspect={2.5 / 5} onUpdate={(c) => c.updateProjectionMatrix()} />
      {/* This is React being awesome, we portal this components children into the separate scene above */}
      {createPortal(children, scene)}
    </>
 
  
  )
}

function Lights() {
  return (
    <>
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={1} />
      <pointLight intensity={4} position={[200, 30, 100]} color="red" />
      <pointLight intensity={1.2} position={[30, 10, 30]} color="blue" />
    </>
  )
}

export function FrontArt() {
  const controls = useRef()
  return (
    <div className="front-page_wrapper">
    <Canvas dpr={(1,2)} camera={{ position: [0, 4, 8], fov: 50 }} gl={{ alpha: false }}>
      <Lights />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Suspense fallback={null}>
        <Stage controls={controls}>
          <MagicMirror position={[-13, 3.5, 0]} rotation={[0, 0, 0]}>
            <Lights />
            <Sky sunPosition={[10000, 10, 10000]} />
            <Angel fixedposition={[-.1, 59.9, 300]} scale={60} />
          </MagicMirror>
          <Concha position={[-8, .65, 2]} rotation={[.50, 0, 0]} />
          <Beer scale={3.6} position={[-10.5, 0, 3]} rotation={[0, 1.30, 0]} />
         
         
          
         
          <Plant position={[-12.5, 0, 3]} />
          
         
        </Stage>
      </Suspense>
      <OrbitControls ref={controls} />
    </Canvas>
    </div>
  )
}

export default FrontArt
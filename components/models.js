import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'


export function Beer(props) {
  const group = useRef()
  const { scene, nodes, materials } = useGLTF('./about-pictures/beer.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0.03, -0.91, 0.03]} scale={[0.1, 0.1, 0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['14043_16_oz_Beer_Bottle_v2_L1_1'].geometry}
          material={materials['14043_16_oz__Beer_Bottle_cap_label']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['14043_16_oz_Beer_Bottle_v2_L1_2'].geometry}
          material={materials.Material__4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['14043_16_oz_Beer_Bottle_v2_L1_3'].geometry}
          material={materials['14043_16_oz__Beer_Bottle_bottle']}
        />
      </group>
    </group>
  )
}

export function Concha(props) {
  const group = useRef()
  const { scene, nodes, materials } =useGLTF('./about-pictures/oneconcha.glb')
  return (
    <group ref={group} {...props} dispose={null}>
    <mesh object={scene} {...props}  castShadow
        receiveShadow
        geometry={nodes.PAN_CONCHA001.geometry}
        material={materials['Default OBJ.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[.35, .35, .35]}/>

    </group>
  )
}


export function Plant(props) {
  const group = useRef()
  const { scene, nodes, materials } =useGLTF('/about-pictures/plant.gltf')

  useFrame((state) => {
    // This function runs 60 times/second, it binds this component to the render-loop.
    // On unmount this subscription is cleaned up automatically.

    // Rotate fins
    const t = state.clock.getElapsedTime()
    

    // Make it float
    group.current.rotation.z = Math.sin(t / 12) / 5
    group.current.rotation.x = Math.cos(t) / 9
    group.current.rotation.y = Math.sin(t / 12) / 5
    group.current.position.y = 0.5 + (1 + Math.sin(t / 10)) / 5
  })
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh object={scene} {...props} 
        castShadow
        receiveShadow
        geometry={nodes.planta_1.geometry}
        material={materials['Standard737373.001']}
        position={[0, 3, 3]}
        scale ={3.5}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.planta_2.geometry}
          material={materials.StandardDFD8D4}
          position={[0, 3, 3]}
          scale ={3.5}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.planta_3.geometry}
        material={materials.ReflectiveFF3248}
        position={[0, 3, 3]}
        scale ={3.5}
        rotation={[Math.PI / 2, 0, 0]}
        />
    
    </group>
  )
}


export function Angel(props) {
  const group = useRef()
  const { scene, nodes, materials } = useGLTF('./about-pictures/angel.glb')

  useFrame((state) => {
    // This function runs 60 times/second, it binds this component to the render-loop.
    // On unmount this subscription is cleaned up automatically.

    // Rotate fins
    const t = state.clock.getElapsedTime()
    

    // Make it float
    group.current.rotation.z = Math.sin(t / 12) / 5
    group.current.rotation.x = Math.cos(t) / 9
    group.current.rotation.y = Math.sin(t / 12) / 5
    group.current.position.y = 0.5 + (1 + Math.sin(t / 10)) / 5
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-2.8, 4.87, .49]} scale={[.8, .8, .8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.angel_1.geometry}
          material={materials.Standard737373}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.angel_2.geometry}
          material={materials.Standard00DF00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.angel_3.geometry}
          material={materials.StandardFFF0FD}
        />
        
      </group>
    </group>
  )
}




import React, { useRef, useState, useEffect } from "react"
import { useGLTF } from "@react-three/drei/useGLTF"
import { useAnimations } from "@react-three/drei"
import MyButton from "./Buttons"

export default function SantaDance(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./models/Santa-Dance.glb")
  const { actions, names } = useAnimations(animations, group)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.3).play()
    return () => actions[names[index]].fadeOut(0.3)
  }, [index, actions, names])

  const onClick = (i) => setIndex(i)

  return (
    <group ref={group} {...props} dispose={null}>
      {names.map((text, i) => <MyButton key={`button_${i}`} myID={i} myText={text} myClick={onClick} />)}
      <group position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          material={materials._Character}
          geometry={nodes.SM_Chr_Santa_01.geometry}
          skeleton={nodes.SM_Chr_Santa_01.skeleton}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./models/Santa-Dance.glb")

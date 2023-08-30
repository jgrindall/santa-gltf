import React, { useState, useEffect } from "react"
import { RoundedBox, Text } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

export default function MyButton({ myID, myText, myClick }) {
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

  const y = 0.15 + 0.27 * myID
  return (
    <group position={[1, y, -0.7]}>
      <RoundedBox
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1,1.1,1]:[1,1,1]}
        onClick={() => myClick(myID)}
        onTap={() => myClick(myID)}
        onPointerDown={() => myClick(myID)}
        args={[1, 0.15, 0.05]} // Width, Height and Depth of the box
        radius={0.05} // Border-Radius of the box
        smoothness={2} // Optional, number of subdivisions
      >
        <meshStandardMaterial  attach="material" color={hovered ?"#35512b": "#FFFFFF"} />
      </RoundedBox>
      <Text
          position={[0, 0, 0.026]}
          color={hovered ?"#FFFFFF":"#000000" } // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {myText}
        </Text>
    </group>
  )
}
/*
<RoundedBox
        position={[-0.95, 0, -0.05]}
        args={[3, 0.2, 0.05]} // Width, Height and Depth of the box
        radius={0.05} // Border-Radius of the box
        smoothness={2} // Optional, number of subdivisions
      >
        <meshBasicMaterial attach="material" color="#35512b" />
      </RoundedBox>

*/

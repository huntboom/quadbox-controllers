import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';
import Side1 from './Side1.js';
import ButtonRounded from './Button.js';
import CenterClip from './CenterClip.js';
import Side2 from './Side2.js';
import HTMLInside from './HTMLInside.js';
import Bottomright from './BottomRight.js';
import Bottomleft from './Bottomleft.js';
import Model from './Pico.js';
import Switchbottom from './Switch_bottom.js';
import Switchworking from './Switchworking.js';
import { Html,OrbitControls} from '@react-three/drei';
import { Vector3 } from 'three'
import * as THREE from 'three'
export default function Group() {
  const group = useRef();
 //  const scroll = useScroll()
 //  const cameraPositionCurve = new THREE.CatmullRomCurve3([
 //  new Vector3(100, 70,100),
 //  new Vector3(0, -60,-100),
 //  new Vector3(0, -50,-100),
//  new Vector3(178, 10, 97),
//  new Vector3(-78, 10, 7),
//  new Vector3(-78, 10, 7),
//  new Vector3(0, 5, 5),
//  new Vector3(1, 6, 5),
//  new Vector3(5, 3, 3),
//  new Vector3(6, 2, -8)
//])
// const cameraLookAtCurve = new THREE.CatmullRomCurve3([
// new Vector3(100, 270,100),
// new Vector3(0, -60,-100),
// new Vector3(0, -50,-100),

//])
 // const cameraLookAt = new Vector3(0, -70,-100)

 // const offset = 1 - scroll.offset 
  useFrame(() => {
  //   rotating the group instead of the mesh
    group.current.rotation.y += Math.PI / 2000
    group.current.rotation.x += Math.PI / 3000
  }) 
 //   useFrame((state, delta) => {
 //      //NOTE: Here's the camera movement
 //   cameraPositionCurve.getPoint(scroll.offset, state.camera.position)
 //   cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt)
 //   state.camera.lookAt(cameraLookAt)
 //   })
        
  return(
      <group position={[0,0,0]} ref={group}>
          <Bottomleft position={[-7,0,30]}/>
          <Bottomright position={[-7,0,30]}/>
          <CenterClip position={[-70,0,0]}/>
          <Side1 position={[-70,0,0]}/>
          <Side2 position={[-70,0,0]}/>
          <Model position={[-2,130,10]} scale={[4.5,4.5,4.5]} rotation={[Math.PI / -2,4.725,0]} /> 
          <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-53.5,60,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-1,98,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[159,106,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-134,122,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
 
              <ButtonRounded position={[23,94,4]}/>
              <ButtonRounded position={[129.5,143,4]}/>
              <ButtonRounded position={[183,102,4]}/>
              <ButtonRounded position={[-110,118,4]}/>
              <ButtonRounded position={[-29.5,56,4]}/>
              <ButtonRounded position={[-67,56,4]}/>
              <ButtonRounded position={[-48,69,4]}/>
              <ButtonRounded position={[-48,43,4]}/>
              <ButtonRounded position={[-29,29,4]}/>
              <ButtonRounded position={[-55,109,4]}/>
              <ButtonRounded position={[-55,131,4]}/>
              <ButtonRounded position={[-136,124.5,4]}/>
              <ButtonRounded position={[-136,102.5,4]}/>
              <ButtonRounded position={[-110,140,4]}/>
              <ButtonRounded position={[-81.5,121,4]}/>
              <ButtonRounded position={[-81.5,143,4]}/>
              <ButtonRounded position={[77.5,29,4]}/>
              <ButtonRounded position={[96.5,42,4]}/>
              <ButtonRounded position={[158,118,4]}/>
              <ButtonRounded position={[129.5,121,4]}/>
              <ButtonRounded position={[103.5,109.5,4]}/>
      </group>
)
}
 



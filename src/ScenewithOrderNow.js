import {Canvas, useFrame } from '@react-three/fiber';
import Side1 from './Side1.js';
import ButtonRounded from './Button.js';
import CenterClip from './CenterClip.js';
import Side2 from './Side2.js';
import BottomRight from './BottomRight';
import { Suspense } from 'react';
import { Html,OrbitControls} from '@react-three/drei';
import { Light } from 'three';
import Body from './Body.js';
import HTMLInside from './HTMLInside.js';
import React, { useRef } from 'react';
import Group from './Group.js';
import Switch from './Switch.js';
import { Sky,useGLTF, useAnimations } from '@react-three/drei'
export default function ScenewithOrderNow() {
 return(
     <div className="homepagecanvas">
    <Canvas colorManagement camera={{position: [0,-70,-100],fov:90}}>
      <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
     <pointLight intensity={1.15} position={[0, 24, -100]} />
          <Group/>
      </Suspense>
    </Canvas>
    </div>
  );
}




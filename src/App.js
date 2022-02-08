import {Canvas} from '@react-three/fiber';
import './styles.css';
import './Model.js';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Side1 from './Side1.js';
import ButtonRounded from './Button.js';
import CenterClip from './CenterClip.js';
import Side2 from './Side2.js';
import BottomRight from './BottomRight';
import { Suspense } from 'react'
import { Html,OrbitControls} from '@react-three/drei'
import { Light } from 'three';
import Body from './Body.js';
import controllerlogo from './controllerupgrade.png';
import {BearCounter,Controls} from './bearcounter.js';
import {useStore} from './store.js';
import Header from './header'
import shoppingcartlogo from './shoppingcart.png';
import menulogo from './menu-three-horizontal-lines-symbol-text-baseball-bat-team-sport-letter-transparent-png-2099785.png';
const HTMLOutside = () => {
    const shellcolor = useStore(state => state.color)

  return(
      <div className='all'>
          <div className='header'>
          <img className='menulogo' src={menulogo}/>
              <div className='Title'>
          <img className='headerimg' src={controllerlogo}/>
          <h1 className='headertitle'>{shellcolor} QUADBOX CUSTOMS</h1>
              </div>
          <img className='shoppingcart' src={shoppingcartlogo}/>
    </div>
          <div className='body'>
              <h2 className='motto'>
                  CUSTOMIZATION UNDER YOUR CONTROL
              </h2>
          </div>
    </div>
      
  )

};

const HTMLInside = () => {
  return(
      <Html center={true}  position={[0,55,0]}>
        <div className='overlayed'>
  <Button style={{
        borderRadius: 35,
        fontweight:0,
        color:'black',
        backgroundColor: "white",
        boxshadow: '5px 10px',
        padding: "18px 36px",
        fontSize: "18px",
    }} variant='contained'>ORDER NOW</Button>
          </div>
      </Html>
  );
}

const Scene = () => {
  return(
    <Canvas colorManagement camera={{position: [0,-70,-100],fov:70}}>
      <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          
     <pointLight intensity={1.15} position={[0, 24, -100]} />
          <OrbitControls/>
          <group position={[0, 0, 0]}>
          <HTMLInside/>
          <CenterClip position={[-70,0,0]}/>
          <Side1 position={[-70,0,0]}/>
          <Side2 position={[-70,0,0]}/>
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
      </Suspense>
      
   /
    </Canvas> 
  );
}

function App() {
  return(
    <>
        <HTMLOutside/>  
        <Scene />
        <Body/>
        <BearCounter/>
        <Controls/>
    </>
  );
};
require('react-dom');
window.React2 = require('react');
export default App;

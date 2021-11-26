import {Canvas} from '@react-three/fiber'
import './styles.css'
import './Model.js'
import Model from './Model.js';
import { Suspense } from 'react'
import { Html,OrbitControls } from '@react-three/drei'
import { Light } from 'three';
import Button from '@mui/material/Button';
import Bottom_Plate_3_Inch from './Bottom_Plate_3_Inch.js';
import Body from './Body.js';
import logo from './pngfind.com-drone-icon-png-6764602.png';
const HTMLOutside = () => {
  return(
      <div className='title'>
          <img src={logo} alt=""/>
          <h1>Drone Parts Picker</h1>
        </div>
  )
};

const HTMLInside = () => {
  return(
    <Html fullscreen>
      <div className='container'>
        <h1 className='title'>Inside Canvas</h1>
      </div>
    </Html>
  );
}
const Scene = () => {
  return(
    <Canvas colorManagement camera={{position: [0,30,100],fov:70}}>
      <Suspense fallback={null}>
     <pointLight intensity={1.12} position={[0, 50, 100]} />
          <OrbitControls/>
          <Bottom_Plate_3_Inch/>
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
    </>
  );
};
require('react-dom');
window.React2 = require('react');
export default App;

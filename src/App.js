import {Canvas} from '@react-three/fiber'
import './styles.css'
import './Model.js'
import Model from './Model.js';
import { Suspense } from 'react'
import { Html,OrbitControls } from '@react-three/drei'
import { Light } from 'three';

const HTMLOutside = () => {
  return(
    <h1>Outside Canvas</h1>
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
   <Model/>
    
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
    </>
  );
};
require('react-dom');
window.React2 = require('react');
export default App;

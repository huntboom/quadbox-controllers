import './App.css';
import {Canvas} from '@react-three/fiber'
import './Model.js'
import Model from './Model.js';
import { Suspense } from 'react'
import { Html,OrbitControls } from '@react-three/drei'
import { Light } from 'three';

const HTMLOutside = () => {
  return(
    <div>Outside Canvas</div>
  )
};

const HTMLInside = () => {
  return(
    <Html fullscreen>
      <div className='container'>
        <h1 className='title'>Inside Canvas</h1>
      </div>
    </Html>
  )
}
const Scene = () => {
  return(
    <Canvas colorManagement camera={{position: [0,0,100],fov:70}}>
  <HTMLInside></HTMLInside>
      <Suspense fallback={null}>
      <OrbitControls/>
   <Model/>
    
      </Suspense>
      
   /
    </Canvas>
  );
}

const App = () => {
  return<Scene />
      
};
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export default App;

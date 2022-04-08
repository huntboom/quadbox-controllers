import {Canvas} from '@react-three/fiber';
import './styles.css';
import { Link,Outlet } from "react-router-dom"; 
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
import {useStore} from './store.js';
import shoppingcartlogo from './shoppingcart.png';
import menulogo from './menu-three-horizontal-lines-symbol-text-baseball-bat-team-sport-letter-transparent-png-2099785.png';
import Header from './Header.js'
import HTMLInside from './HTMLInside.js'
import ScenewithOrderNow from './ScenewithOrderNow.js';
import Paracordselector from './routes/customizer.js';
import Productdetails from './Productdetails.js';
import Ordernowbutton from './Ordernowbutton.js';
const HTMLOutside = () => {
  return(
      <div>
         <div className='body'>
              <h2 className='motto'>CUSTOMIZATON UNDER YOUR CONTROL
              </h2>
        <div className='order'>
            </div>
          </div>
      </div>
  )
};

function SceneModifier() {
    return(
        <div className='SceneModifier'>
            <ScenewithOrderNow/>
        </div>
    )
}

export default function Landingpage() {
  return(
      <>
      <Header/>
      <div className='homepage'>
        <HTMLOutside/>
        <Ordernowbutton/>
          <div className="homepagecanvas">
        <ScenewithOrderNow/>
          </div>
       <Body/>
      </div>
      <Productdetails/>
    </>
  );
};



import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import create from 'zustand';
import {useStore} from './store.js';
import raspberrypi0 from './thumb.jpg';
export default function Body() {
   return( 
       <div className="homepagebody">
           <div className="divider"></div>
      <div className='ergonomics'>
          <h2 className="bodyheading">Ergonomic control in style</h2>
          <p className="boxdetails">The quadbox brings the most advance hardware and features in a sleek form factor. Designed for smash bros.
          </p>
       </div>
           </div>
    );
};


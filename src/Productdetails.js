import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import create from 'zustand';
import {useStore} from './store.js';
import raspberrypi0 from './thumb.jpg';
import thinprofile from './thin-profile_720x.jpg';
import kailh from './kailhtester.jpg';
import keymapping from './key-mapping.jpg';

export default function Productdetails() {
return(
    <div>
<div className="container">
    <img src={raspberrypi0} className="raspberrypi0"></img>
    <div className='featurecontainer'>
    <h2 className="feature">
        <h3>
            <h2>Designed for Speed</h2>
           <div className="divider"></div><p className='details'>
               The Quadbox uses fully Open-Source hardware and Software to allow for accommodations necessary to be fully tournament legal. Developed with fast production and top of the line low-latency in mind.</p>
        </h3>
        </h2>
    </div>
           </div>

    <div className="container">
    <div className='featurecontainer'>
    <h2 className="feature"> 
        <h3>
            <h2>Ultra Thin Profile</h2>
           <div className="divider"></div><p className='details'>
               The Quadbox utilizes a smaller profile without sacrificing comfort. Designed to be comfortable for long hours of play while maintaining portablity.</p>
        </h3>
    </h2>
    </div>
    <img src={thinprofile} className="raspberrypi0"></img>
           </div>
 <div className="container">
    <img src={kailh} className="raspberrypi0"></img>
    <div className='featurecontainer'>
    <h2 className="feature">
        <h3>
            <h2 className='detailheading'>You're In Control</h2>
            <div className="divider"></div><p className='details'>
                Choose from a wide variety of Kailh switches, each rated with a lifespan of 60 millions strokes. You get to decide the exact feel you want for your controller; tactile, linear, clicky, we have you covered. Can't decide? No worries, the Quadbox switches are fully hotswappable and you can order an extra set of any switch you like to be able to customize to your liking.</p>
        </h3>
        </h2>
    </div>
           </div>
     <div className="container">
    <div className='featurecontainer'>
    <h2 className="feature"> 
        <h3>
            <h2>Customizable Layout</h2>
           <div className="divider"></div>
               <p className='details'>
                   With a intuitive built in button remapping system, it's completely up to you to decide how you want your controller laid out.</p>
        </h3>
    </h2>
    </div>
    <img src={keymapping} className="raspberrypi0"></img>
           </div>
 
    </div>
)
}

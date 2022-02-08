import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import create from 'zustand';
import {useStore} from './store.js';

export default function Body() {
    const [frameColor,setColor] = useState("green");
    const side1color = useStore(state => state.color)
   return(
        <div className='instructions'> 
          <button className='ordernow'>ORDER NOW</button>
            <p className='instructions'>
            Step One: Choose your frame.
             </p>
            <select name="selectList" id="selectList" onChange={(e)=>{
                const selectedColor=e.target.value;
                setColor(selectedColor)
            }}>
            <option value="green">Green</option>
              <option value="blue">Blue</option>
            <option value="black">Black</option>
            </select>
            {frameColor}
            <p className='instructions'>
                Step Two: Choose your flight controller
            </p>
        <Button style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
    }} variant='contained'>GET STARTED</Button>
            {console.log({frameColor})}
            {frameColor}
   </div>
    );
};


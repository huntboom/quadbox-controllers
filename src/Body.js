import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Body() {
    const [frameColor,setColor] = useState("green");
    const testColor = 'green';
    return(
        <div className='instructions'> 
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
        <Button variant='contained'>GET STARTED</Button>
            {console.log({frameColor})}
            {frameColor}
   </div>
    );
};


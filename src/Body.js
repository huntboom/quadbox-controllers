import React from "react";
import Button from '@mui/material/Button';

export default function Body(props) {

return(
        <div className='instructions'> 
        <p className='instructions'>
            Step One: Choose your frame.
             </p>
        <select name="selectList" id="selectList">
            <option value="green">Green</option>
              <option value="option 2">Blue</option>
            </select>
            <p className='instructions'>
                Step Two: Choose your flight controller
            </p>
        <Button variant='contained'>GET STARTED</Button> 
   </div>
    );
};

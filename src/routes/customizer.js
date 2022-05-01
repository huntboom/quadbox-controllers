import Header from '../Header.js'
import {useStore} from '../store.js';
import Scene from '../Scene.js';
import greenparacord from '../s-l1600.jpg';
import pinkparacord from '../pink.jpg';
import lightblueparacord from '../lightblue.jpg';
import redparacord from '../red.jpg';
import whiteparacord from '../white.jpg';
import orangeparacord from '../orange.jpg';
import yellowparacord from '../yellow.jpg';
import purpleparacord from '../purple.jpg';
import Checkbox from '@mui/material/Checkbox'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import purpleswitch from '../purpleswitch.jpg';
import brownswitch from '../brownswitch.jpg';
import lightgreenswitch from '../lightgreenswitch.jpg';
import burgundyswitch from '../burgundyswitch.jpg';
import bronzeswitch from '../bronzeswitch.jpg';
import pinkswitch from '../pinkswitch.jpg';
import silverswitch from '../silverswitch.jpg';
import yellowswitch from '../yellowswitch.jpg';

function Partselecter() {
    const changePink = useStore(state => state.changePink)
    const changeBlue= useStore(state => state.changeBlue)
    const changeGreen= useStore(state => state.changeGreen)
    const changeRed= useStore(state => state.changeRed)
    const changePurple= useStore(state => state.changePurple)
    const changeWhite= useStore(state => state.changeWhite)
    const changeOrange= useStore(state =>state.changeOrange)
    const changeYellow= useStore(state =>state.changeYellow)
    const changeClear= useStore(state =>state.changeClear)
    return(
 <div className='headergap'>
    <div className='shellColor'>
        <div className='partselecter'>
         <h1>Welcome to the build a box workshop</h1>
            <h2>Step 1: Choose Your Quadbox Shell Colors</h2>                
            <button id="colorbuttons" onClick={changeGreen} className='greenbutton'></button> 
            <button id="colorbuttons" onClick={changePink} className='pinkbutton'></button> 
            <button id="colorbuttons" onClick={changeBlue} className='bluebutton'></button>
            <button id="colorbuttons"  onClick={changeRed} className='redbutton'></button>
            <button id="colorbuttons"  onClick={changeWhite} className='whitebutton'></button>
            <button id="colorbuttons"  onClick={changeOrange} className='orangebutton'></button>
            <button id="colorbuttons"  onClick={changeYellow} className='yellowbutton'></button>
            <button id="colorbuttons"  onClick={changePurple} className='purplebutton'></button>
            <button id="colorbuttons"  onClick={changeClear} className='clearbutton'><p>Clear</p></button>

        </div>
            <div className='canvas'>
            <Scene/>       
        </div>
    </div>
   </div>
    )
}
function ButtonSelector() {
    const changeButtonPink = useStore(state => state.changeButtonPink)
    const changeButtonBlue= useStore(state => state.changeButtonBlue)
    const changeButtonGreen= useStore(state => state.changeButtonGreen)
    const changeButtonRed= useStore(state => state.changeButtonRed)
    const changeButtonPurple= useStore(state => state.changeButtonPurple)
    const changeButtonWhite= useStore(state => state.changeButtonWhite)
    const changeButtonOrange= useStore(state =>state.changeButtonOrange)
    const changeButtonYellow= useStore(state =>state.changeButtonYellow)
    const changeButtonClear= useStore(state =>state.changeButtonClear)
    return(
    <div className='shellColor'>
        <div className='partselecter'>
            <h2>Step 2: Choose Your Quadbox Button Colors</h2>                
            <button id="colorbuttons" onClick={changeButtonGreen} className='greenbutton'></button> 
            <button id="colorbuttons" onClick={changeButtonPink} className='pinkbutton'></button> 
            <button id="colorbuttons" onClick={changeButtonBlue} className='bluebutton'></button>
            <button id="colorbuttons"  onClick={changeButtonRed} className='redbutton'></button>
            <button id="colorbuttons"  onClick={changeButtonWhite} className='whitebutton'></button>
            <button id="colorbuttons"  onClick={changeButtonOrange} className='orangebutton'></button><button id="colorbuttons"  onClick={changeButtonYellow} className='yellowbutton'></button>
            <button id="colorbuttons"  onClick={changeButtonPurple} className='purplebutton'></button>
            <button id="colorbuttons"  onClick={changeButtonClear} className='clearbutton'><p>Clear</p></button>

        </div>
    </div>
    )
}
export function Paracordselector() {
    return(
            <div className="shellColor">
                <div className="partselecter">
                <h2>Step 3: Choose Your Cord Color and Type</h2>
                <div className='checkbox'>
<FormControlLabel control={<Checkbox defaultChecked 
                    sx={{
    color: '#d81b60',
    '&.Mui-checked': {
      color: '#d81b60',
    },
  }} />} label="I would like a paracord (+$3.00)" />
                </div> 
                    <img id="paracord" src={greenparacord}></img>
                <img id="paracord" className='greenparacord' src={pinkparacord}></img>
                    
                <img id="paracord" src={lightblueparacord}></img>
                
                <img id="paracord" src={redparacord}></img>
                <img id="paracord" src={whiteparacord}></img>
                <img id="paracord" src={orangeparacord}></img>
                <img id="paracord" src={yellowparacord}></img>
                <img id="paracord" src={purpleparacord}></img>
                </div>
            </div>
    )
}

export function SwitchSelector() {
    const changeSwitchPink = useStore(state => state.changeSwitchPink)
    const changeSwitchBrown= useStore(state => state.changeSwitchBrown) 
    const changeSwitchCyan= useStore(state => state.changeSwitchCyan)
    const changeSwitchRed= useStore(state => state.changeSwitchRed)
    const changeSwitchPurple= useStore(state => state.changeSwitchPurple)
    const changeSwitchBurgundy= useStore(state => state.changeSwitchBurgundy)
    const changeSwitchOrange= useStore(state =>state.changeSwitchOrange)
    const changeSwitchYellow= useStore(state =>state.changeSwitchYellow)
    const changeSwitchSilver= useStore(state =>state.changeSwitchSilver)
    return(
            <div className="shellColor">
                <div className="partselecter">
                    <h2>Step 4: Choose Your Hot-Swappable Kailh Switches</h2>
                    <img id="switch" src={purpleswitch} onClick={changeSwitchPurple}></img>                   
                    <img id="switch" src={yellowswitch} onClick={changeSwitchYellow}></img>                   
                    <img id="switch" src={silverswitch} onClick={changeSwitchSilver}></img>                   
                    <img id="switch" src={bronzeswitch} onClick={changeSwitchOrange}></img>                   
                    <img id="switch" src={burgundyswitch} onClick={changeSwitchBurgundy}></img>                   
                    <img id="switch" src={lightgreenswitch} onClick={changeSwitchCyan}></img>                   
                    <img id="switch" src={brownswitch} onClick={changeSwitchBrown}></img>                   
                    <img id="switch" src={pinkswitch} onClick={changeSwitchPink}></img>
                <div className='checkbox'>
                    <FormControlLabel control={<Checkbox defaultChecked 
                    sx={{
                        color: '#d81b60',
                        '&.Mui-checked': {
                        color: '#d81b60',
                    },
                      }} />} label="I would like an additional set of switches (+$3.00)" />
                </div> 
                </div>
            </div>
    )
}

   

export default function Customizer() {
  
    return (
      <>
      <Header/>
      <Partselecter/>
      <ButtonSelector/>
      <Paracordselector/>
      <SwitchSelector/>
      </>
  );
}

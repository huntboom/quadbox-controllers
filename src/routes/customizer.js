import Header from '../Header.js'
import {useStore} from '../store.js';
import Scene from '../Scene.js';


function Partselecter() {
    const changePink = useStore(state => state.changePink)
    const changeBlue= useStore(state => state.changeBlue)
    const changeGreen= useStore(state => state.changeGreen)
    const changeRed= useStore(state => state.changeRed)
    const changePurple= useStore(state => state.changePurple)
    const changeWhite= useStore(state => state.changeWhite)
    const changeOrange= useStore(state =>state.changeOrange)
    return(
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
        </div>
            <div className='canvas'>
            <Scene/>       
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
    return(
    <div className='shellColor'>
        <div className='partselecter'>
            <h2>Step 2: Choose Your Quadbox Button Colors</h2>                
            <button id="colorbuttons" onClick={changeButtonGreen} className='greenbutton'></button> 
            <button id="colorbuttons" onClick={changeButtonPink} className='pinkbutton'></button> 
            <button id="colorbuttons" onClick={changeButtonBlue} className='bluebutton'></button>
            <button id="colorbuttons"  onClick={changeButtonRed} className='redbutton'></button>
            <button id="colorbuttons"  onClick={changeButtonWhite} className='whitebutton'></button>
            <button id="colorbuttons"  onClick={changeButtonOrange} className='orangebutton'></button>
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
      <ButtonSelector/>
      </>
  );
}

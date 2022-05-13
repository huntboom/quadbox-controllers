import Header from '../Header.js'
import { useStore } from '../store.js';
import Checkbox from '@mui/material/Checkbox'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { createContext } from 'react';
import shoppingcartlogo from '../shoppingcart.png';
import { Link,Outlet } from "react-router-dom"; 
 

function CartFull() {
    return(
        <div>
            <input>
                <h3>
                    Contact Information
                </h3>
                

            </input>
        </div>
    )
}
function Cart() {
    const store = useStore(state => state.color)
return(
        <div className="headergap">
            <h1 className="emptycart">
            Your Quadbox Cart is Empty
            </h1>
            <p>It appears you haven't yet added any items to your cart!</p>
            <p>Checkout the box customizer page to get started</p>
            <Link to="/customizer">
        <Button style={{ borderRadius: 25,
        fontweight:0,
        color:'black',
        backgroundColor: "white",
        boxshadow: '5px 10px',
        padding: "15px 156px",
        fontSize: "15px",
        wordwrap:"break-word",
        whitespace:"normal",
        display:"flex",
        flexdirection:"row",
        }} variant='contained'> <span className="buttontext">Click</span><span className="buttontext">here</span><span className="buttontext">to</span><span className="buttontext">Get</span><span className="buttontext">Started</span></Button>
        </Link>
        </div>
)
}
export default function Checkout() {
  
    return (
      <>
      <Header/>
          <div className="checkoutcontainer">
      <Cart/>
          </div>
     </>
  );
}

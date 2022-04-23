import {useStore} from './store.js';    
import menulogo from './menu-three-horizontal-lines-symbol-text-baseball-bat-team-sport-letter-transparent-png-2099785.png';
import controllerlogo from './controllerupgrade.png';
import shoppingcartlogo from './shoppingcart.png';
import { Link,Outlet } from "react-router-dom"; 
import { Navbar } from './Navbar.js';


export default function Header() {

function Navbar() {


return(
    <div className="dropdown"></div>
)
}

const navbardropdown = Navbar()



return(
<div className='all'>
          <div className='header'>
         <Link to="/customizer">
          <img className='headerimg' src={controllerlogo}/>
         </Link>
              <div className='Title'>
                  <Link to="/">
          <h1 className='headertitle'>QUADBOX CUSTOMS</h1>
                  </Link> 
                  </div>
          <img className='shoppingcart' src={shoppingcartlogo}/>
    </div>
</div>
)
}


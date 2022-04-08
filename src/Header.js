import {useStore} from './store.js';    
import menulogo from './menu-three-horizontal-lines-symbol-text-baseball-bat-team-sport-letter-transparent-png-2099785.png';
import controllerlogo from './controllerupgrade.png';
import shoppingcartlogo from './shoppingcart.png';
import { Link,Outlet } from "react-router-dom"; 

export default function Header() {

return(
<div className='all'>
          <div className='header'>
          <img className='menulogo' src={menulogo}/>
              <div className='Title'>
                  <Link to="/customizer">
          <img className='headerimg' src={controllerlogo}/>
                  </Link>
                  <Link to="/">
          <h1 className='headertitle'>QUADBOX CUSTOMS</h1>
                  </Link> 
                  </div>
          <img className='shoppingcart' src={shoppingcartlogo}/>
    </div>
</div>
)
}


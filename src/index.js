import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,
         Routes,
         Route
} from "react-router-dom";
import Customizer from "./routes/customizer";
import { createBrowserHistory } from "history";
import Checkout from "./routes/checkout";

const customHistory = createBrowserHistory({
           
});
ReactDOM.render(
<React.StrictMode>
    <BrowserRouter history={customHistory}>
        <Routes>
            <Route path="/" component={({history}) => {window.appHistory = history;
                return <App/>;
            }}
            element={<App/>}/>
            <Route path="customizer" element={<Customizer/>}/>
            <Route path="checkout" element={<Checkout/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

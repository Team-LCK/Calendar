import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Calendar/App'
import Login from './Login/Login'
import Register from './Register/Register'
import Link from './Link';
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RecoilRoot>
      <Link />
    </RecoilRoot>
  /* </React.StrictMode> */
)

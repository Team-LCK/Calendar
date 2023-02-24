import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Calendar/App'
import Login from './Login/Login'
import Register from './Register/Register'
import Link from './Link';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RecoilRoot>
       <Link />
    </RecoilRoot>
  </React.StrictMode>
);

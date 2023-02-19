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

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={createStoreWithMiddleware(Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())}
    >
      <Link />
    </Provider>
    , document.getElementById('root')
  
);

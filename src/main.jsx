import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyComponent from './MyComponent'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyComponent/>
  </React.StrictMode>,
)

import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import PublicRoute from "../lib/PublicRoute";
import ProtectedRoute from "../lib/ProtectedRoute";


import Mainpage from "./Mainpage/Mainpage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import App from "./Calendar/App";
import Maps from "./Maps/Maps";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import TodoList from "./TodoList/TodoList";
import About from "./About/About";
import Auth from "./hoc/auth";


function Link(){
    return(
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div style={{paddingTop:"169px"}}></div>
               <div>
                    <Routes>
                        <Route path = "/" element={<PublicRoute/>}>
                          <Route path ="/" element ={<Mainpage />} />
                          <Route path ="/login" element={<Login />} />
                          <Route path ="/register" element ={<Register />} />
                          <Route path ="/about" element ={<About />} />
                        </Route>
                        <Route path = "login" element={<ProtectedRoute/>} >
                            <Route path ="/login/Calendar" element = {<App />} />
                            <Route path ="/login/map"   element = {<Maps />} />
                            <Route path ="/login/Calendar/:id" element ={<TodoList />} /> 
                         </Route>
                    </Routes>
                </div> 
                <Footer />
            </Suspense>
        </Router>
    )
}

export default Link;
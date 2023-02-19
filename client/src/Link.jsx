import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Register/Register";
import App from "./Calendar/App";
import Maps from "./Maps/Maps";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function Link(){
    return(
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div style={{paddingTop:"169px"}}></div>
               <div>
                    <Routes>
                        <Route path ="/" element={<Login />} />
                        <Route path ="/login" element={<Login />} />
                        <Route path ="/register" element={<Register />} />
                        <Route path ="/Calendar" element={<App />} />
                        <Route path ="/map" element ={<Maps />} />
                    </Routes>
                </div> 
                <Footer />
            </Suspense>
        </Router>
    )
}

export default Link;
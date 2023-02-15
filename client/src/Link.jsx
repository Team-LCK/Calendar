import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Register/Register";
import App from "./Calendar/App";
import List from "./List/List";
import Maps from "./Maps/Maps";
function Link(){
    return(
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
               <div>
                    <Routes>
                        <Route path ="/" element={<Login />} />
                        <Route path ="/login" element={<Login />} />
                        <Route path ="/register" element={<Register />} />
                        <Route path ="/Calendar" element={<App />} />
                        <Route path ="/list" element={<List />} />
                        <Route path ="/map" element ={<Maps />} />
                    </Routes>
                </div> 
            </Suspense>
        </Router>
    )
}

export default Link;
import { useState } from "react";
import Button from "./Button";
import Event from "./Event";
import './Login.css'

const Login = () => {

    return (<>
        <>
        <img style = {{width : 1500 , height : 500}} className="image" alt = 'test1' src="img/testpic.png"></img>
        </>
        <Event/> <Button/>
          </>
        );
    
};




export default Login;
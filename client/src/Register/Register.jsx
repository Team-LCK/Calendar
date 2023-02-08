import React, { Component, useState } from 'react';


const Register =() => {
    

    return(
       <div>
        <div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='이름'
            />
        <div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='ID'
            />
        </div>
        <div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='PW'
            />
        </div>
        <div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='PW 확인'
            />
        </div>
        </div>

             <button onClick>확인버튼</button>        
        </div>
    );
};

export default Register;
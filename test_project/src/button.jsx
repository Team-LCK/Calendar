import React, { useState } from 'react';



const btn = () => {
    

    
    return (
        <div>
            <button onClick style = {{color: "red"}}>입장</button>        
            <button onClick>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};


export default btn;
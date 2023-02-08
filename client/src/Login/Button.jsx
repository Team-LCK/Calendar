import React, { useState } from 'react';



const Button = () => {
    
    const onClick = () =>{
        alert('아이디 비번 찾기로 넘어가기')

    }


    return (
        <div>
            <button onClick={onClick}>아이디 / PW 찾기</button>        
        </div>
    );
};


export default Button;
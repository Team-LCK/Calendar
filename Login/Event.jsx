import React, { Component, useState } from 'react';

const Event = () =>{

    const message = useState('');
    const onClickEnter = (a) => alert(a)
    return (
       <div> <div>
            <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='ID'

            />
  
            
            <button
            style={{width:'150px'}}
                onClick={
                (e) => {
                    alert({message});
            }}>
                로그인하기
            </button>
        </div>
        <div>
            <h2                
            style={{height: '50px'}}/>
            
        </div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='password'

            />
             <button
                style={{width:'150px'}}
                onClick={
                (e) => {
                    alert({message});
            }}>
                회원가입
            </button>
        </div>
    );
};

export default Event;
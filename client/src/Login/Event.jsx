import React, { Component, useState } from 'react';

const Event = () =>{

 

    const [form, setForm] = useState({
        username : '',
        password : ''
    });

    const {username, password} = form;
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
 
    const onChange = (e) => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + password);

    };
    const makeuser = (e) =>{
        alert(username + ': ' + password + '으로 회원가입하기');

    };

    return (
       <div> 
        <div>
            <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='ID'
                name = "username"
                value = {username}
                onChange={onChange}
            />
  
            
            <button
            style={{width:'150px'}}
                onClick={onClick}>
                로그인하기
            </button>
        </div>
        <div>
            <h2                
            style={{height: '50px'}}/>
            
        </div>
        <input
                style = {{height: '50px'}}
                type = "password"
                
                name = "password"
                placeholder='password'
                value = {password}
                onChange={onChange}
            />
             <button
                style={{width:'150px'}}
                onClick={makeuser}>
                회원가입
               
            </button>
        </div>
    );
};

export default Event;
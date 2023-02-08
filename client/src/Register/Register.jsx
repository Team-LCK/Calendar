import React, { Component, useState } from 'react';


const Register =() => {
    
    const [form, setForm] = useState({
        aname : '',
        username : '',
        password : ''
    });
    const {aname, username, password} = form;
    const [message , setMessage] = useState({
        message : ''
    });

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
        alert(aname + username + ': ' + password + '으로 회원가입하기');

    };

    const iscoreect = (a1, a2, message) =>{
  /* 둘이 같지 않으면 같지 않다고 뜨고, 같으면 일치합니다 뜨도록*/ 
    if(a1==a2)
    {
        message: "일치합니다."
    }
    else{
        message: "일치하지 않습니다."
    }
    };
    return(
       <div>
        <div stlye = {{/* 리사이즈 해주기*/}}>
        <input 
                style = {{height: '50px'}}
                type = "text"
                placeholder='이름'
                name = 'aname'
                onChange={onChange}
            />
        <div>
        <input
                style = {{height: '50px'}}
                type = "text"
                placeholder='ID'
                name = 'username'
                onChange={onChange}                
            />
        </div>
        <div>
        <input
                style = {{height: '50px'}}
                type = "passeword"
                placeholder='PW'
                name = 'passseord'
                onChange={onChange}
            />
        </div>
        <div>
        <input
                style = {{height: '50px'}}
                type = "password"
                placeholder='PW 확인'
            />
        </div>
        </div>

             <button onClick={makeuser}>확인버튼</button> 
             <div>
                <h2 type = "text"
                    name = "message">
                    
                </h2>    
            </div>       
        </div>
   
    );
};

export default Register;
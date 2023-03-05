import React, { Component, useState, useEffect } from 'react';
import {Button, Form} from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import '../Login/Login.css'

import axios from 'axios';
import axiosPublic from '../axios';
/*const Register =() => {
    
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
   둘이 같지 않으면 같지 않다고 뜨고, 같으면 일치합니다 뜨도록
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
        <div stlye = {{ 리사이즈 해주기}}>
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
*/

const Input=styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;
`

const RegisterBtn=styled.button`
    width:100px;
    height:30px;
    border-radius: 3px;
    border:1px solid gray;
    background-color: transparent;
    margin-top:20px;
    &:hover{
        cursor: pointer;
        border:2px solid skyblue;
        transition:border 0.2s ease-in;
    }
`

const Messages=styled.div`
    color:#4096ff;
`

const RegisterSuccess=styled.div`
    color:#4096ff;
    font-size:30px;
`

function Register(){

    const { register, handleSubmit, formState: { errors },setError } = useForm();
    const [registerSuccess,setRegisterSuccess]=useState(false);
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.checkpassword) {      
            setError(
              'checkpassword',
              { message: '비밀번호가 일치하지 않습니다.' }, 
              { shouldFocus: true }, 
            );
          }
        axiosPublic.post("/api/users/register",{
            name:data.name,
            email:data.email,
            password:data.password
        })
        .then(res=>{
            console.log(res);
            if(res.data.success){
                setRegisterSuccess(prev=>!prev);
                setTimeout(()=>{
                    navigate('/login')
                },2000)
            }
            else{
                alert(res.data.message);
            }
        });
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
                    <div><h2>이름</h2></div>
                    <Form.Item required label="Name">
                        <Input {...register("name", { required: true,
                    maxLength:{value:20,message:"이름이 너무 깁니다."},
                    minLength:{value:2,message:"이름이 너무 짧습니다."} })} placeholder="Enter your name" type= "text" />
                    </Form.Item>
                    {errors.name ? <Messages>{errors.name.message}</Messages> : null}
                    <div><h2>아이디(이메일)</h2></div>
                    <Form.Item required label="Email">
                        <Input {...register("email", { required: true,pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            }, })} placeholder="Enter your Email" type="email" />
                    </Form.Item>
                    {errors.email ? <Messages>{errors.email.message}</Messages> : null}
                    <div><h2>비밀번호</h2></div>
                    <Form.Item required label = "Password">
                        <Input {...register("password", { required: true,
                    maxLength:{value:15, message:"비밀번호가 너무 깁니다."},
                    minLength: {value: 8, message: "비밀번호가 너무 짧습니다."},
                    pattern:{value:/^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,message:"영문과, 숫자를 혼용하여 입력해주세요."} })} placeholder="Enter your Password" type="Password" />
                    </Form.Item>
                    {errors.password ? <Messages>{errors.password.message}</Messages> : null}
                    <div><h2>비밀번호 확인</h2></div>
                    <Form.Item required label = "CheckPassword">
                        <Input {...register("checkpassword", { required: true })} placeholder="Rewrite your Password" type="Password" />
                    </Form.Item>
                    {errors.checkpassword ? <Messages>{errors.checkpassword.message}</Messages> : null}
                    {registerSuccess ? <RegisterSuccess>회원가입 성공✅</RegisterSuccess> : null}
                    <RegisterBtn>회원가입하기</RegisterBtn>
                </form>
}

export default Register;
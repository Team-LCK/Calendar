import React, { Component, useState , useEffect} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button} from "antd";
import axios from 'axios';
/*const Event = () =>{
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
*/

function moving(){
    window.location.href="/register";
}

function Event(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }


    const onSubmitHandler = (event) => {
        axios.post("http://localhost:5000/login",{
            email,
            password
        }).then(console.log("서버 전송 완료"))
        
        window.location.href="/Calendar";
    }
    
    
    

    return(

        <Formik 
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
            password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
            })}
        >
        
        <Form>
            <div><h2>아이디(이메일)</h2></div>
            <Form.Item required label="Email">
                <Input id="email" placeholder="Enter your Email" type="email" onChange={onEmailHandler}/>
             </Form.Item>
             <div><h2>비밀번호</h2></div>
             <Form.Item required label="Password">
                <Input id="Password" placeholder="Enter your Password" type="Password" onChange={onPasswordHandler} />
             </Form.Item>

             <Button onClick={onSubmitHandler}>Submit</Button>
             <Button>아이디/PW찾기</Button>
             <Button onClick={moving}>회원가입</Button>
        </Form>


        </Formik>
        
    )
}

export default Event;
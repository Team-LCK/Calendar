import React, { Component, useState, useEffect } from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button} from "antd";
import axios from 'axios';
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

function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
       setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        axios.post("http://localhost:5000/register",{
            name,
            email,
            password
        }).then(console.log("서버 전송 완료"))
        .then(window.location.href="/login");
    }



    return(
        <Formik initialValues={{name: "", email: "", password: ""}}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .required("Name is required"),
                    email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is required"),
                    password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required"),
                })}
                >
                
                <Form>
                    <div><h2>이름</h2></div>
                    <Form.Item required label="Name">
                        <Input id = "name" placeholder="Enter your name" type= "email" onChange={onNameHandler} />
                    </Form.Item>
                    <div><h2>아이디(이메일)</h2></div>
                    <Form.Item required label="Email">
                        <Input id="email" placeholder="Enter your Email" type="email" onChange={onEmailHandler} />
                    </Form.Item>
                    <div><h2>비밀번호</h2></div>
                    <Form.Item required label = "Password">
                        <Input id="Password" placeholder="Enter your Password" type="Password" onChange={onPasswordHandler} />
                    </Form.Item>

                    <Button onClick={onSubmit}>회원가입하기</Button>
                </Form>


        </Formik>
    )
}

export default Register;
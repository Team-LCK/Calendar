import React from "react";
import {Menu} from "antd";
import axios from "axios";
import { USER_SERVER } from "../../Config";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function RightMenu(props){

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then((response)=>{
            if(response.status === 200){
                navigate("/login");
            } else{
                alert("Log Out Failed");
            }
        })
    }
    if(user.loginSuccess === true)
    {
        return(
            <Menu style={{display:'flex', justifyContent:'flex-end'}}>
                <Menu.Item key ="logout">
                    <a onClick={logoutHandler}>로그아웃</a>
                </Menu.Item>
            </Menu>
        )

    } else{
        return(
            <Menu style={{display:'flex', justifyContent:'flex-end'}}>
                <Menu.Item key="login">
                    <a href = "/login">로그인</a>
                </Menu.Item>
                <Menu.Item key="register">
                    <a href = "/register">회원가입</a>
                </Menu.Item>
            </Menu>
        )
    }
    
}

export default RightMenu;
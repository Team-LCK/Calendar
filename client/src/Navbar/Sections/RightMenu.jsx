import React, { useEffect } from "react";
import {Menu} from "antd";
import { useRecoilState } from "recoil";
import { cookies, loginSuccess } from "../../atom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function RightMenu(props){
    const [login,setLogin]=useRecoilState(loginSuccess);
    const [cookie,setCookie]=useRecoilState(cookies);
    const onClickLogout=()=>{
        axios.get("http://localhost:5000/logout",{params: {cookie}}, 
        { withCredentials: true }).then(res=>{
            if(res.data.success)
                setLogin(prev=>!prev);
        });
    }
    return(
        <Menu style={{display:'flex', justifyContent:'flex-end'}}>
            {!login ? <><Menu.Item key="login">
                <a href = "/login">로그인</a>
            </Menu.Item>
            <Menu.Item key="register">
                <a href = "/register">회원가입</a>
            </Menu.Item></> : <Menu.Item onClick={onClickLogout} key="logout">
                <a href="/">로그아웃</a>
            </Menu.Item>}
        </Menu>
    )
}

export default RightMenu;
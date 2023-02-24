import React, { useEffect } from "react";
import {Menu} from "antd";
import { useRecoilState } from "recoil";
import { loginSuccess } from "../../atom";

function RightMenu(props){
    const [login,setLogin]=useRecoilState(loginSuccess);
    const onClickLogout=()=>{
        setLogin(prev=>!prev);
    }
    return(
        <Menu style={{display:'flex', justifyContent:'flex-end'}}>
            {!login ? <><Menu.Item key="login">
                <a href = "/login">로그인</a>
            </Menu.Item>
            <Menu.Item key="register">
                <a href = "/register">회원가입</a>
            </Menu.Item></> : <Menu.Item onClick={onClickLogout} key="logout">
                <a href = "/login">로그아웃</a>
            </Menu.Item>}
        </Menu>
    )
}

export default RightMenu;
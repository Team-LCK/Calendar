import React from "react";
import {Menu} from "antd";

function RightMenu(props){
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

export default RightMenu;
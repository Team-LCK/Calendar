import React from "react";
import {Menu} from "antd";
import {useSelector} from "react-redux";

function LeftMenu(props){

    return(
    <Menu>
        <Menu.Item key = "mail">
            <a href ="/">Home</a>
        </Menu.Item>
    </Menu>
    )
}

export default LeftMenu;
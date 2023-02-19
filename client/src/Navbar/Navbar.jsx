import React , {useState} from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import {SmileOutlined} from '@ant-design/icons';
import './Sections/Navbar.css';
function Navbar(){
    return(
        <nav className="menu" style={{position: 'absolute' , zIndex: 5, width: '90%'}}>
            <div className="menu_logo">
                <a href="/"><SmileOutlined />Calendar</a>
            </div>
            <div className = "menu_container">
                <div className = "menu_left">
                    <LeftMenu mode = "horizontal" />
                </div>
                <div className = "menu_right">
                    <RightMenu mode = "horizontal" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

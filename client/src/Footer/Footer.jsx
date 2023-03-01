import React from "react";
import {UserOutlined , FacebookOutlined, InstagramOutlined, GithubOutlined} from "@ant-design/icons";

function Footer(){
    return(
        <div style={{marginTop: "100px"}}>
            <table>
                <td> <h3 style={{fontFamily:"Roboto"}}>Developers &nbsp;</h3> </td>
                <td> <h5 style={{fontFamily:"Roboto"}}>Frontend:&nbsp; Lee&nbsp;Dongwook &nbsp; Choi&nbsp;Inyoung &nbsp;</h5></td>
                <td> <h5 style={{fontFamily:"Roboto"}}>Backend: &nbsp; Kim&nbsp;Hyeonmin &nbsp; &nbsp; &nbsp; &nbsp;</h5></td>
                <td>Share with us! &nbsp;</td>
                <td><a href="http://facebook.com"><FacebookOutlined /></a></td>
                <td><a href="http://instagram.com"><InstagramOutlined /></a></td>
                <td><a href="http://github.com/Team-LCK/Calendar"><GithubOutlined /></a> &nbsp; &nbsp;</td>
                <td><a href="/about">About our website</a></td>
            </table>
        </div>
    )
}

export default Footer;
 
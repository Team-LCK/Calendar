import React from 'react';
import {Button} from 'antd';

function movetologin()
{
    window.location.href="/login";
}

function movetoregister()
{
    window.location.href="/register";
}

function Mainpage(){
    return(
        <div>
            <table>
                <tr>
                  <Button onClick={movetologin}>로그인</Button>
                  <Button onClick={movetoregister}>회원가입</Button>
                </tr>
            </table>
        </div>
    )
}

export default Mainpage;
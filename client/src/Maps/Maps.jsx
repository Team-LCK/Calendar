import React, {useState} from "react";
import KakaoMapApi from "./Sections/KakaoMapApi";
import {Form, Input, Button} from "antd";
import './Sections/Maps.css';
function Maps(){

    const [Inputtext, setInputText] = useState('');
    const [Place , setPlace] = useState('');

    const onChange = (e) => {
      setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setPlace(Inputtext);
      setInputText('');
    }

    return(
        <div>
        <div>
            <Form className="inputForm" onSubmit={handleSubmit} >
            <table>
              <tr>
              <td>
                <h3>장소검색: &nbsp;</h3>
              </td>
              <td>
                <Input style={{width:"300px"}} onChange={onChange} value={Inputtext} placeholder="검색어를 입력하세요." />
                <Button type="submit" onClick={handleSubmit} style={{backgroundColor:"beige"}}>검색</Button>
              </td>
              </tr>
            </table>
          </Form>
        </div>
        <div>
          <KakaoMapApi searchPlace={Place} />
        </div>
        <br />
        <br />
        <br />
        <br />
        </div>

    )
}

export default Maps;

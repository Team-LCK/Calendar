import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Header from "./Header";
import Calendar from "./Calendar";
import './style/RCA.css';
import {Button} from 'antd';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function mapping(){
    window.location.href="/map";
}

function jsontitle(){
    let json = JSON.parse(localStorage.getItem("dataToSubmit"));
    let txt = json.title;
    return txt;
}

function jsonyear(){
    let json = JSON.parse(localStorage.getItem("dataToSubmit"));
    let txt = json.year;
    return txt;
}

function jsonmonth(){
    let json = JSON.parse(localStorage.getItem("dataToSubmit"));
    let txt = json.month;
    return txt;
}

function jsonday(){
    let json = JSON.parse(localStorage.getItem("dataToSubmit"));
    let txt = json.day;
    return txt;
}

function jsontext(){
    let json = JSON.parse(localStorage.getItem("dataToSubmit"));
    let txt = json.text;
    return txt;
}

function App() {

    const [hasTodo,setHasTodo]=useState(false);
    const [calendarYM, setCalendarYm] = useState(moment());
    const [today, setToday] = useState(moment());
    const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"));

    useEffect(()=>{
        console.log();
        if(localStorage.getItem("dataToSubmit")){
            setHasTodo(prev=>!prev);
        }
    },[])

    const moveMonth = (month) => {

        /**
         * Others have already given the technical solution. To anyone confused as to why this happens,
         * is because setSomething() only re renders the component if and only if the previous and current state is different.
         * Since arrays in javascript are reference types, if you edit an item of an array in js, it still doesn't change the reference to the original array.
         * In js's eyes, these two arrays are the same, even though the original content inside those arrays are different.
         * That's why setSomething() fails do detect the changes made to the old array.
         * Note that if you use class components and update the state using setState() then the component will always update regardless of whether the state has changed or not.
         * So, you can change your functional component to a class component as a solution. Or follow the answers provided by others.
         * @param month
         */

        // setCalendarYm(calendarYM.add(month, 'M')); ?????? ?????? ????????? ?????? ?????????????????? ??????

        // ????????? ????????? moment ????????? ???????????? ?????? ?????????
        const newDate = moment(calendarYM.add(month, 'M'));
        setCalendarYm(newDate);

    }


    const clickFn = () => {
    };

    const changeSelected = (clickedDate) => {
        if (moment(clickedDate).isSame(selected, 'day')) {
            clickFn(clickedDate);
            return;
        }

        setSelected(clickedDate);
        clickFn(clickedDate);

        if (moment(clickedDate).isBefore(calendarYM, 'month')) {
            moveMonth(-1);
        } else if (moment(clickedDate).isAfter(calendarYM, 'month')) {
            moveMonth(1);
        }

    }
    
    return (
        <div>
        <table>
        <td><div className="test-layout">
            <div className="RCA-app-container">
                <Header calendarYM={calendarYM.format("YYYY??? MM???")}
                        today={today.format("?????? YYYY - MM - DD")}
                        moveMonth={moveMonth}
                />
                <Calendar YM={calendarYM.format("YYYY-MM-DD")}
                          selected={selected}
                          changeSelected={changeSelected}
                          calendarYM = {calendarYM.format("YYYY??? MM???")}
                />
            </div>
            
         </div></td>
         </table>
         <div>
            <Button onClick={mapping}>????????? ???????????????? </Button>
        </div>
        {hasTodo ? <div>
            <table>
                <td><h4>?????? ????????? ??????: &nbsp; &nbsp; </h4></td>
                <td><h5>??????: {jsontitle()}</h5></td>
                <td>&nbsp;</td>
                <td><h5>??????: {jsonyear()}??? {jsonmonth()}??? {jsonday()}??? </h5></td>
                <td>&nbsp;</td>
                <td><h5>??????: {jsontext()}</h5></td>
            </table>
        </div> : null}
        </div>
    );
}

export default App;
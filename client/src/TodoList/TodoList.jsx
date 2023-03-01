import React ,{useState ,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

function movetoCalendar(){
    window.location.href="/Calendar";
}

function TodoList(){

    const [list, setList] = useState([]);

    const [title, setTitle] = useState("");
    const [text, setText] =useState("");
    const {state} = useLocation();

    const number = state.YM;
    const result = number.split(" ");
    
    const year = result[0].substring(0,4);
    const month = result[1].substring(1,2);
    const day = state.day;

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    }


    const onTextHandler = (event) => {
        setText(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const dataToSubmit = {
            title : title,
            text: text,
            year: year,
            month: month,
            day: day
        }

        setList(prev => {
            return 
                [...prev, dataToSubmit]
            
        })
        
        axios.post("http://localhost:5000/Todolist",{
            title,
            text,
            year,
            month,
            day
        })
        .then(res => console.log(res))

        localStorage.setItem("dataToSubmit",JSON.stringify(dataToSubmit));
    }

   return(
    <div>
        <table style={{marginLeft:"310px", marginTop: "20px"}}>
            <tr><label>제목: </label><input type="text" onChange ={onTitleHandler} placeholder="Enter Title" /></tr>
            <tr><label>내용: </label><input type="textarea" onChange={onTextHandler} placeholder="Enter Content" /></tr>
            <tr><td><button onClick={onSubmitHandler}>저장하기</button></td><td><button onClick={movetoCalendar}>이동하기</button></td></tr>
        </table>
    </div>
   )
}

export default TodoList;
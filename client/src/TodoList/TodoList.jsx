import React ,{useState ,useEffect} from 'react';

function movetoCalendar(){
    window.location.href="/Calendar";
}

function TodoList(){

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] =useState("");

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const onDateHandler = (event) => {
        setDate(event.target.value);
    }

    const onTextHandler = (event) => {
        setText(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const dataToSubmit = {
            title : title,
            date: date,
            text: text
        }

        localStorage.setItem("dataToSubmit",JSON.stringify(dataToSubmit));
    }

   return(
    <div>
        <h5>일정추가</h5>
        <table>
            <tr><label>제목: </label><input type="text" onChange ={onTitleHandler} placeholder="Enter Title" /></tr>
            <tr><label>날짜: </label><input type="date" onChange ={onDateHandler} placeholder="Enter Date" /></tr>
            <tr><label>내용: </label><input type="textarea" onChange={onTextHandler} placeholder="Enter Content" /></tr>
            <tr><td><button onClick={onSubmitHandler}>저장하기</button></td><td><button onClick={movetoCalendar}>이동하기</button></td></tr>
        </table>
    </div>
   )
}

export default TodoList;
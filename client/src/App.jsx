import React, {useEffect, useState} from 'react';
import moment from 'moment'
import Header from "./Header.jsx";
import Calendar from "./Calendar.jsx";
import './style/RCA.css'

function App() {

    
    const [calendarYM, setCalendarYm] = useState(moment());
    const [today, setToday] = useState(moment());
    const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"));

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

        // setCalendarYm(calendarYM.add(month, 'M')); 위와 같은 사유로 해당 코드만으로는 안됨

        // 이렇게 새로운 moment 객체를 생성해서 할당 해야함
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
        <div className="test-layout">
            <div className="RCA-app-container">
                <Header calendarYM={calendarYM.format("YYYY년 MM월")}
                        today={today.format("현재 YYYY - MM - DD")}
                        moveMonth={moveMonth}
                />
                <Calendar YM={calendarYM.format("YYYY-MM-DD")}
                          selected={selected}
                          changeSelected={changeSelected}
                />
            </div>
        </div>
    );
}

export default App;
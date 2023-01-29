import React, { Component, useState } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요'
                    onChange={
                        (e) => {
                            console.log(e);
                        }
                    }
                />
            </div>
        );
    }
}



const Event = () =>{

    const message = useState('');
    const onClickEnter = (a) => alert(a)
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type = "text"
                name = {message}
                placeholder='연습용 텍스트'
                onChange={
                    (e) => {
                        console.log(e.target.value);
                        setState({message : e.target.value});
                    }
                }
            />
            <button onClick={
                (e) => {
                    alert({message});
            }}>
                alert하기
            </button>
        </div>
    );
};

export default Event;
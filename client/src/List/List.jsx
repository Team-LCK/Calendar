import react from "react"

function Moving(){
    window.location.href="/Calendar";
}

function List(){
    return(
        <div>
        <div>
            <h3>할일추가</h3>
        </div>
        <div>
            <h5>제목</h5>
            <input type="text" placeholder="할일 제목" />
        </div>
        <div>
            <h5>날짜</h5>
            <input type="text" placeholder="날짜" />
        </div>
        <div>
            <h5>내용</h5>
            <input type="text" placeholder="할일 내용" />
        </div>
        <div>
            <button>저장하기</button>
            <button onClick={Moving}>이동하기</button>
        </div>
        </div>
    )
}

export default List;
import { useLocation } from "react-router-dom";

function TodoList(){
    const {state}=useLocation();
    return <div>{state.YM} {state.day}일</div>
}

export default TodoList;
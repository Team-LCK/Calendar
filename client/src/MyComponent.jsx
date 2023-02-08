import { useState } from "react";

const MyComponent = () => {
    const [name, setName] = useState('asd');

    const onChange = e => {
        setName(e.target.value);
    };

    return(
        <>
            <TestComponent name={name} onChange={onChange}/>
        </>
    );

};


const TestComponent = (props) => {

    const {name, onChange} = props;
    return(
        <>
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            입니다.
        </div>
        <input type="text" value={name} onChange={onChange} />
        </>
    )
}




export default MyComponent;
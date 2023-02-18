import react,{useState} from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button} from "antd";

function Moving(){
    window.location.href="/Calendar";
}

function List(){

    const [title, settitle] = useState("");
    const [date, setdate] = useState("");
    const [context, setcontext] = useState("");

    const ontitlehandler = (event) => {
        settitle(event.target.value)
    }
    const ondatehandler = (event) => {
        setdate(event.target.value)
    }
    const oncontexthandler = (event) => {
        setcontext(event.target.value)
    }

    const onSubmithandler =(event) => {
        event.preventDefault();
        console.log(title)
        console.log(date)
        console.log(context)

        var data = {
            title : title,
            date : date,
            context : context,
        };

        localStorage.setItem("data",JSON.stringify(data));
     }


    return(
        <Formik
            initialValues={{title: "", Date: "", context: ""}}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                .required("Title is required"),
                Date: Yup.string()
                .required("Date is required"),
                context: Yup.string()
                .required("Context is required"),

            })}>
        
        <Form>
            <Form.Item required label="제목">
                <Input id="title" type="text" placeholder="Enter Title" onChange={ontitlehandler}/>
            </Form.Item>
            <Form.Item required label="날짜">
                <Input id="date" type="text" placeholder="Enter Date" onChange={ondatehandler}/>
            </Form.Item>
            <Form.Item required label="내용">
                <Input id="context" type="text" placeholder="Enter Context" onChange={oncontexthandler}/>
            </Form.Item>

            <Button onClick={onSubmithandler}>저장하기</Button>
            <Button onClick={Moving}>이동하기</Button>
        </Form>

        </Formik>

     
    )
}

export default List;
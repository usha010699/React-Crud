import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Form,Button,Container,Alert} from 'react-bootstrap'

function AddEmployee() {
  const arr =[]
  const baseURl ="https://jsonplaceholder.typicode.com/posts";
  const Navigate = useNavigate();
  const [enteredTitle,setTitle] = useState('');
  const [enteredBody,setBody] = useState('');

  const titleChangeHandler =(e)=>{
    setTitle(e.target.value)
  }
  const bodyChangeHandler =(e)=>{
    setBody(e.target.value)
  }
 
  const submitActionHandler =(e) =>{
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: enteredTitle,
    body: enteredBody,
    userId: 101,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response)=>{

    alert("record inserted");
    console.log(response.json());
    arr.push(response)
    // Navigate("/read")
  }).catch(error =>{
    alert("error")
  })


  // .then((response) => response.json())
  // .then((json) => console.log(json));
    // axios.post(baseURl,{
    //   title:enteredTitle,
    //   body:enteredBody
    // })
    // .then((res)=>{
    //   alert("record inserted");
    //   Navigate("/read")
    // }).catch(error =>{
    //   alert("error")
    // })
  }

  const cancelHandler = () =>{
    setTitle('');
    setBody('');
    Navigate("/read")
  }

  return (
    <Alert varient='primary'>
      <Container>
        <Form onSubmit={submitActionHandler}>
          <Form.Group controlId="form.Title">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={enteredTitle} onChange={titleChangeHandler} placeholder='Enter Title' required/>
          </Form.Group>
          <Form.Group controlId="form.Body">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" value={enteredBody} onChange={bodyChangeHandler} placeholder='Enter Body'/>
          </Form.Group>
          <br></br>
          <Button type="submit">Add Employee</Button>
          <Button type="submit" onClick={()=>cancelHandler()}>Cancel</Button>
        </Form>
      </Container>
    </Alert>
  )
}

export default AddEmployee
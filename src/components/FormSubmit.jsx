import React, { useState } from "react";
import {Button, Form } from "react-bootstrap";
//import "./styles.css";
//mport '../css/bootstrap.css';


const FormSubmit = ({lat,lng,onSubmit}) => {
  const [email, setEmail] = useState(lat);
  const [password, setPassword] = useState(22);
  console.log(password)
  const handleChange = (e)=>{
      console.log(e.target)
      setPassword(e.target.value)
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={lat}
          //onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          value={lng}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group> */}
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
}

export default FormSubmit

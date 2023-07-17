import React, { useState } from "react";
import { Button, Form, Modal, Container } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:4000";

const SignUpModal = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.id === "name") {
      setName(value);
    } else if (e.target.id === "email") {
      setEmail(value);
    } else if (e.target.id === "password") {
      setPassword(value);
    } else {
      console.log("Not a target");
    }
  };

  const onSignUp = () => {
    axios
      .post(
        "api/user/signup",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            withCredentials: "true",
          },
        }
      )
      .then((res) => {
        alert(res.json());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" value={name} onChange={onChange} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" value={email} onChange={onChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" value={password} onChange={onChange} type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button onClick={onSignUp} size="lg" variant="info" type="submit" className="my-3">
                Sign Up
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;

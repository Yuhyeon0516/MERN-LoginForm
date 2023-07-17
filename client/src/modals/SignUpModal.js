import React, { useState } from "react";
import { Button, Form, Modal, Container } from "react-bootstrap";

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
    console.log("Sign Up");
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
              <Button onClick={onSignUp} size="lg" variant="info" type="button" className="my-3">
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

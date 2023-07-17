import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal, Container } from "react-bootstrap";

const SignInModal = ({ show, onHide, setLogined }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.id === "email") {
      setEmail(value);
    } else if (e.target.id === "password") {
      setPassword(value);
    } else {
      console.log("Not a target");
    }
  };

  const onClick = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/user/signin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setEmail("");
        setPassword("");
        onHide();
        setLogined();

        localStorage.clear();
        localStorage.setItem("id", res.data.user._id);
      })
      .catch((error) => {
        alert(error.response.data.errors[0].message);
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" value={email} onChange={onChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" value={password} onChange={onChange} type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button size="lg" variant="info" onClick={onClick} type="submit" className="my-3">
                Sign In
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;

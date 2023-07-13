import React from "react";
import { Button, Form, Modal, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizontalLine";

const SignInModal = ({ show, onHide }) => {
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
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button size="lg" variant="info" type="button" className="my-3">
                Sign In
              </Button>
            </div>
            <HorizontalLine text={"OR"} />
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <div className="d-grid gap-2">
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ backgroundColor: "#176BEF", borderColor: "176BEF" }}>
                      <i className="fab fa-google"></i>&nbsp;Sign In with Google
                    </Button>
                  </div>
                );
              }}
            />
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;
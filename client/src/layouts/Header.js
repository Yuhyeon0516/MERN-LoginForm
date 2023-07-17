import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  return (
    <>
      <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
      <SignInModal show={signInModalOn} onHide={() => setSignInModalOn(false)} />
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Yuhyeon's DEV Diary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <Button variant="primary" onClick={() => setSignInModalOn(true)}>
                    Sign In
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant="secondary" onClick={() => setSignUpModalOn(true)}>
                    Sign Up
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

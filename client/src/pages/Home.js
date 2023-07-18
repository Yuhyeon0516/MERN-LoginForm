import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Container } from "react-bootstrap";
import Board from "../components/Board";

const Home = () => {
  const [isLogined, setIsLogined] = useState(false);

  const isLoginedTrue = () => {
    setIsLogined(true);
  };

  const isLoginedFalse = () => {
    setIsLogined(false);
  };

  return (
    <>
      <Header isLogined={isLogined} isLoginedTrue={isLoginedTrue} isLoginedFalse={isLoginedFalse} />
      <Container style={{ minHeight: "75vh" }}>
        <Board isLogined={isLogined} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

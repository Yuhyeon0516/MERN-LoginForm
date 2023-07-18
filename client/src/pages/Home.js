import React from "react";
import { Container } from "react-bootstrap";
import Board from "../components/Board";

const Home = ({ isLogined }) => {
  return (
    <>
      <Container>
        <Board isLogined={isLogined} />
      </Container>
    </>
  );
};

export default Home;

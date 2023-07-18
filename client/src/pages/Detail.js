import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState({});
  const navigate = useNavigate();
  const deleteTapped = () => {
    // server 부 delete에서 post로 변경 필요
  };
  const modifyTapped = () => {};

  useEffect(() => {
    axios
      .post(
        "/api/board/detail",
        {
          _id: id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setBoard(res.data.board);
      })
      .catch((error) => {
        alert("잘못된 접근입니다.");
        navigate("/");
      });
  }, [id, navigate]);

  return (
    <Container>
      <Table style={{ marginTop: 15 }} striped bordered hover>
        <thead>
          <tr>
            <th>{board.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              dangerouslySetInnerHTML={{
                __html: board.content,
              }}
            ></td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Button variant="primary">수정</Button>
        </Link>
        <Button variant="secondary">삭제</Button>
      </div>
    </Container>
  );
};

export default Detail;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import BoardRow from "./BoardRow";
import { Link } from "react-router-dom";

const Board = ({ isLogined }) => {
  const [boardList, setboardList] = useState([]);
  const [viewMyBoard, setViewMyBoard] = useState(false);
  useEffect(() => {
    axios.get("/api/board/BoardList", { withCredentials: true }).then((res) => {
      setboardList([...res.data.board].reverse());
    });
  }, []);

  const viewMyBoardTapped = () => {
    if (viewMyBoard) {
      axios.get("/api/board/BoardList", { withCredentials: true }).then((res) => {
        setboardList([...res.data.board].reverse());
      });
    } else {
      axios
        .post("/api/board/MyBoardList", { writer: localStorage.getItem("id") }, { withCredentials: true })
        .then((res) => {
          setboardList([...res.data.board].reverse());
          setViewMyBoard((prev) => !prev);
        })
        .catch((error) => {
          alert(error.response.data.errors[0].message);
        });
    }
  };

  return (
    <div>
      {isLogined ? (
        <div>
          <div style={{ marginTop: 30 }}>
            <div style={{ marginBlock: 15, display: "flex", justifyContent: "space-between" }}>
              <Link to="/write">
                <Button variant="primary">글 작성</Button>
              </Link>
              <Button variant="primary" onClick={viewMyBoardTapped}>
                {viewMyBoard ? "전체 글 목록" : "내가 쓴 글 목록"}
              </Button>
            </div>
            <Table striped bordered hover className="border-primary">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>글 제목</th>
                </tr>
              </thead>
              <tbody>
                {boardList.map((board) => {
                  return <BoardRow key={board._id} board={board} />;
                })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center", alignItems: "center" }}>
          어서오세요. Yuhyeon's Diary 입니다.
          <br />
          로그인을 하시면 게시물 확인이 가능합니다.
        </h1>
      )}
    </div>
  );
};

export default Board;

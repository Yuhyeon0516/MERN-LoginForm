import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BoardRow from "./BoardRow";

const Board = ({ isLogined }) => {
  const [boardList, setboardList] = useState([]);
  useEffect(() => {
    axios.get("/api/board/BoardList", { withCredentials: true }).then((res) => {
      setboardList([...res.data.board]);
    });
  }, []);

  return (
    <div>
      {isLogined ? (
        <div>
          <div style={{ margin: 50 }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>글 제목</th>
                </tr>
              </thead>
              <tbody>
                {boardList.map((board) => {
                  return <BoardRow board={board} />;
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

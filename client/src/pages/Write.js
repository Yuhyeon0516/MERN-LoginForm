import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Write = () => {
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const saveBtnTapped = () => {
    if (id) {
      axios
        .post(
          "/api/board/update",
          { _id: id, title, content },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert(res.data.successes[0].message);
        })
        .catch((err) => {
          alert("잘못된 접근입니다.");
        })
        .finally(() => {
          navigate("/");
        });
    } else {
      const writer = localStorage.getItem("id");
      axios
        .post(
          "/api/board/write",
          {
            writer,
            title,
            content,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert(res.data.successes[0].message);
        })
        .catch((err) => {
          alert("잘못된 접근입니다.");
        })
        .finally(() => {
          navigate("/");
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .post(
          "/api/board/detail",
          {
            _id: id,
          },
          { withCredentials: true }
        )
        .then((res) => {
          const board = res.data.board;
          setTitle(board.title);
          setContent(board.content);
        })
        .catch((error) => {
          alert("잘못된 접근입니다.");
          navigate("/");
        });
    }
  }, [id, navigate]);

  return (
    <Container>
      <div style={{ marginTop: 30 }} className="App">
        <h2>글쓰기</h2>
        <Form.Control value={title} onChange={changeTitle} type="text" style={{ marginBottom: 10 }} placeholder="글 제목" />
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
          config={{
            toolbar: ["bold", "italic", "|", "undo", "redo", "|", "numberedList", "bulletedList"],
          }}
        />
        <Button style={{ marginTop: 10 }} onClick={saveBtnTapped}>
          저장하기
        </Button>
      </div>
    </Container>
  );
};

export default Write;

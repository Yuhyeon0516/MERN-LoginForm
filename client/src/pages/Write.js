import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Write = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const saveBtnTapped = () => {
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

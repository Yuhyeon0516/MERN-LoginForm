import React from "react";
import { Link } from "react-router-dom";

const BoardRow = ({ board }) => {
  return (
    <tr>
      <td>
        <Link to={`/detail/${board._id}`}>{board.createdAt}</Link>
      </td>
      <td>
        <Link to={`/detail/${board._id}`}>{board.title}</Link>
      </td>
    </tr>
  );
};

export default BoardRow;

import React from "react";
import { Link } from "react-router-dom";
import DateFormatter from "../helpers/DateFormatter";

const BoardRow = ({ board }) => {
  return (
    <tr>
      <td>
        <Link to={`/detail/${board._id}`}>{DateFormatter(board.createdAt)}</Link>
      </td>
      <td>
        <Link to={`/detail/${board._id}`}>{board.title}</Link>
      </td>
    </tr>
  );
};

export default BoardRow;

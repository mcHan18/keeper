import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <HighlightOffIcon />
      </button>
    </div>
  );
}

export default Note;

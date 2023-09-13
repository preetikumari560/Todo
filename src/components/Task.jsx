
import React from "react";

function Note(props) {
  return (
    <div className="note">

      <p>{props.title}</p>
      <button 
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;

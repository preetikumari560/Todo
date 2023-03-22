import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setState] = useState({
    title: "",
    content: ""
  });

  function textSubmit(event) {
    const { name, value } = event.target;
    setState((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={textSubmit}
          value={inputText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={textSubmit}
          value={inputText.content}
        />
        <button
          onClick={(event) => {
            props.addOn(inputText);
            setState({ title: "", content: "" });
            event.preventDefault(); // to stop refreshing of page/render of page
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

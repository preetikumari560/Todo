import React, { useState } from "react";

function CreateTask(props) {
  const [inputText, setInputText] = useState({
    title: "",
  });
  function textSubmit(event) {
    const { name, value } = event.target;
    setInputText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleAddClick(event) {
    event.preventDefault();
    if (inputText.title.trim() !== "") { // Check if input is not empty or only whitespace
      props.addOn(inputText);
      setInputText({ title: "" });
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Add Task"
          onChange={textSubmit}
          value={inputText.title}
        />

      <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateTask;


import React, { useState } from "react";
import Header from "./Header";
import Task from "./Task";
import CreateTask from "./CreateTask";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preVitem) => {
      return [...preVitem, inputText];
    });
  }

  function deleteItem(id) {
    console.log(id);
    setItems((prevItems) => {
      // console.log(prevItems)
      return prevItems.filter((item, index) => {
        // console.log( index)
        return index !== id;
      });
    });
  }

  return (
    <div>
    
      <Header />
      <CreateTask addOn={addItem} />
      {items.map((element, index) => (
        <Task
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          onChecked={deleteItem}
        />
      ))}

    </div>
  );
}

export default App;

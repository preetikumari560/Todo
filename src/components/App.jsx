
// import React from 'react'
// import Header from "./header";
// import Footer from "./footer";
// import Note from "./note";
// import NoteData from "../notes";

// function App()
// {
//     return <div> 
//     <Header />

// {NoteData.map((data) => (
//   <Note key={data.id} title={data.title} content={data.content} />
// ))}
// <Footer />
//     </div>
// }

// export default App


import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

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
      <CreateArea addOn={addItem} />
      {items.map((element, index) => (
        <Note
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          onChecked={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

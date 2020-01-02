import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemArray, setItemArray] = useState([]);

  function onAddNote(newNote) {
    setItemArray(prevItemArray => [...prevItemArray, newNote]);
    console.log(itemArray);
  }

  function onDelete(id) {
    setItemArray(() => {
      return itemArray.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAddNote} />
      {itemArray.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

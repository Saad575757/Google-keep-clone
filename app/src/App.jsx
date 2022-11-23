import React, { useState } from "react";
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {

    // alert('I am clicked');
    setAddItem((prevData) => {
      return (
        [...prevData, note]
      )
    });
    console.log(note);
  };
  const onDelete =(id)=>{
    setAddItem((prevdata)=>
    prevdata.filter((currdata,index)=>{
      return index !== id;

    })
    )

  }
  return (
    <>
      <Header />
      <CreateNote className="create_note_box" passNote={addNote} />
      <div className="note_box">
      {addItem.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}

        />
        
      })

      }
      </div>
      <Footer />
    </>
  )

}

export default App;
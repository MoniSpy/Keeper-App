import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";


//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}


function App() {

  const [notes, setNotes]=useState([]);

  function addNote(note){
    console.log(note);
    setNotes(prevNotes => {
     return  [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem,index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />

      {notes.map((noteItem, index )=> {
        return (
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
          
        );
    })}
    <button onClick={apiCall}>Make API Call</button>
      <Footer />
    </div>
  );
}

export default App;

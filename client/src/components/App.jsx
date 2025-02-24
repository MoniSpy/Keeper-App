import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";




const BASE_URL= "http://localhost:3000";




function App() {

const [notes, setNotes]=useState();



useEffect(()=>{
  if (!notes){
    axios.get(BASE_URL+"/notes").then((res)=>{
      setNotes(res.data || []);
    });
  }
},[notes]);


async function addNote(note){
  const response= await axios.post(BASE_URL+"/notes", note);
    setNotes(prevNotes => {
    return  [...prevNotes, response.data];
   }) 
  }

  async function deleteNote(id){
   const response=await axios.delete(BASE_URL+"/notes/delete/"+id);
   setNotes(prevNotes => {
      return prevNotes.filter((noteItem ,index) => {
        return noteItem.id !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes?.map((noteItem, index )=> {
        return (
          <Note 
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          /> 
        );
    })}
      <Footer />
    </div>
  );
}

export default App;

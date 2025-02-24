import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";




const BASE_URL= "http://localhost:3000";




function App() {

const [notes, setNotes]=useState();


//data will be the string we send from our server

useEffect(()=>{
  if (!notes){
    axios.get(BASE_URL+"/notes").then((res)=>{
      console.log(res.data);
      setNotes(res.data || []);
    });
  }
},[notes]);


async function addNote(note){
  const response= await axios.post("http://localhost:3000/notes", note);
    console.log(response.data);
    setNotes(prevNotes => {
    return  [...prevNotes, response.data];
   }) 
  }

  async function deleteNote(id){
   const response=await axios.delete("http://localhost:3000/notes/delete/"+id);
    console.log(response.data);
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

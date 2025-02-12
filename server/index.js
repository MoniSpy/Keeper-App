import express from "express";
import axios from "axios";
import cors from "cors";
import { getNotes } from "./persistance/notes.js";
import {createNote} from "./persistance/notes.js";
import bodyParser from "body-parser";


//Iinitialise express, set port to 3000
const app = express();
const port = 3000;

//Middlewear
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/notes", async (req, res) => {
    let notes= await getNotes();
    res.send(notes);
})

//add notes 
app.post("/notes" , async (req,res) =>{
    const title=req.body.title;
    const content=req.body.content;
    let notes=await createNote(title,content)
    res.send(notes);
});

app.delete("/notes:id", async (req, res) => {

});

//SET UP PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
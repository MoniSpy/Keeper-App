import express from "express";
import axios from "axios";
import cors from "cors";
import { getNotes } from "./persistance/notes.js";





//Iinitialise express, set port to 3000
const app = express();
const port = 3000;

//Middlewear
app.use(cors());

app.get('/', async (req, res) => {
    // let notes=[{title:"fff", content:"hhhh"}];
    let notes= await getNotes();
    res.send(notes);
})

//SET UP PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
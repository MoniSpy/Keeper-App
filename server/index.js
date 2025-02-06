import express from "express";
import axios from "axios";
import cors from "cors";





//Iinitialise express, set port to 3000
const app = express();
const port = 3000;

//Middlewear
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

//SET UP PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
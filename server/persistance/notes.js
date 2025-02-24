import pg from "pg";
import env from "dotenv";


env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();

async function getNotes(){
    const result=await db.query("SELECT * FROM notes");
    return result.rows;
}

async function createNote(title, content){
    const result=await db.query("INSERT INTO notes (title,content) VALUES ($1,$2) RETURNING *",[title, content]);
    return result.rows;
}

async function deleteNotes(id) {
   const result =await db.query("DELETE from notes WHERE id = $1 RETURNING *",
    [id]
   );
    return result.rows;
}

export {getNotes, createNote, deleteNotes};
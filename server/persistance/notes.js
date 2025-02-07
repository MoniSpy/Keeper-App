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

  // Conect to database
db.connect();

async function getNotes(){
    const result=await db.query("SELECT * FROM notes");
    return result.rows;
}

export {getNotes};
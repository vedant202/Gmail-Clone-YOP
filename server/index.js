import express from "express";
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors'

const app = express();

// to know api json data is comming
app.use(express.urlencoded({extended:true})); //
app.use(express.json());

app.use(cors());

app.use('/',routes)

Connection();


app.listen('8000',()=>{console.log("Listening on port 8000")})
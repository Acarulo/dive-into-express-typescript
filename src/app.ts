import "dotenv/config";

import express from "express";
import cors from "cors";

import {router} from "./routes";
import db from "./config/mongo"

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json);
app.use(router);

db().then(() => console.log("DB is ready"));

app.listen(port, () => {
    console.log(`Listening to port no. ${port}`);
})
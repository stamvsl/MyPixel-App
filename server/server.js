import express from "express"
const app = express();
import connection from "./connection.js";

import bodyParser from 'body-parser'
app.use(bodyParser.json())

app.use(express.json());

app.listen(3001, () => {
    console.log('Server is running on port 3001')
  })
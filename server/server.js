import express from "express"
const app = express();
import connection from "./connection.js";
import userRouter from "./routes/user.js"
import bodyParser from 'body-parser'
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use("/users", userRouter)


import express from "express";
const app = express();
import connection from "./connection.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import getRouter from "./routes/get.js";

//import multer, { diskStorage } from "multer"
import bodyParser from "body-parser";
//import path from "path"
import cors from "cors";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/", getRouter);

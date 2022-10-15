import express from "express"
const app = express();
import connection from "./connection.js";
import userRouter from "./routes/user.js"
import postRouter from "./routes/post.js"
import multer, { diskStorage } from "multer"
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
app.use("/posts", postRouter)







const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

app.post('/img', upload.single('image'), function (req, res, next) {
 
})
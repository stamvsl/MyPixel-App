import express from "express"
const app = express();
import connection from "./connection.js";
import userRouter from "./routes/user.js"
import postRouter from "./routes/post.js"
//import multer, { diskStorage } from "multer"
import bodyParser from 'body-parser'
//import path from "path"

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







// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/images')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//       if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//           cb(null, true);
//       } else {
//           cb(null, false);
//           return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//       }
//   }
// })

// app.post('/img', upload.single('image'), function (req, res, next) {
//   console.log("hello")
// console.log(req.file); 
// const url = req.protocol + '://' + req.get('host')
// console.log(url)
// })
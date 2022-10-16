import express from "express"
const router = express.Router();
import posts from "../models/Posts.js/" 
import multer, { diskStorage } from "multer"
import path from "path"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
  })
  
  // router.post('/img', upload.single('image'), function (req, res, next) {
  //   console.log("hello")
  // console.log(req.file); 
  // const url = req.protocol + '://' + req.get('host')
  // console.log(url)
  // })






// router.post("/new", upload.single('image'), async (req,res)=>{
//     const post = new posts({
//         text: req.body.text,
//         //image: req.file.fileName
//     })
//     console.log(post);
//     try{
//         const newPost = await post.save()
//         res.json(newPost)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })


router.post("/new", upload.single('image'), async (req,res)=>{
  try {
    const photo = new posts(req.body);
    const file = req.file.buffer;
    photo.photo = file;

    await photo.save();
    res.status(201).send({ _id: photo._id });
  } catch (error) {
    res.status(500).send({
      upload_error: 'Error while uploading file...Try again later.'
    });
  }
},
(error, req, res, next) => {
  if (error) {
    res.status(500).send({
      upload_error: error.message
    });
  }
}
);





export default router
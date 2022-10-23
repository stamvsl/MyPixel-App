import express from "express"
const router = express.Router();
import Posts from "../models/Posts.js/" 
import multer, { diskStorage } from "multer"
import path, { resolve } from "path"


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../images')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({
//   storage: storage,
//   limits: { fieldSize: 10 * 1024 * 1024 }, //10MB
//   fileFilter: (req, file, cb) => {
//       if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//           cb(null, true);
//       } else {
//           cb(null, false);
//           return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//       }
//   }
// })

// router.post('/new', upload.single('image'), function (req, res, next) {
//   console.log("hello")
// console.log(req.file); 
// const url = req.protocol + '://' + req.get('host')
// console.log(url)
// })


// router.post("/new", upload.single('image'), async (req,res)=>{
//     const post = new Posts({
//         text: req.body.text,
//         image: req.file.filename
//     })
//     console.log(post);
//     //console.log(image);
//     try{
//         const newPost = await post.save()
//         res.json(newPost)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })




var upload = multer({dest:'images/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images');
     },
     filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});
var upload = multer({ storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
})

router.post('/new', upload.single('image'),async (req, res, error) => {
  const post = new Posts({
           
            image: req.file.filename,
            text: req.body.text
        })
        console.log(post);
        //console.log(image);
        try{
            const newPost = await post.save()
            res.json(newPost)
        }catch(e){
            res.status(500).send(e)
        }
    })
  






export default router
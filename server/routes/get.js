import express from "express"
const router = express.Router();
import Posts from "../models/Posts.js/" 
import multer, { diskStorage } from "multer"
import path, { resolve } from "path"

const { dirname } = path


router.get("/allPosts", async(req, res) => {
    try {
        const posts = await Posts.find().sort({createdAt:-1});
        res.json(posts);
      } catch (e) {
        console.log(e);
      }
  });


  router.get("/images/:imageName", async(req, res) => {
    const imgPath = path.resolve("./") + "/images/" + req.params.imageName
    console.log(imgPath)
    res.sendFile(imgPath)
  });

  export default router
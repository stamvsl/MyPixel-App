import express from "express"
const router = express.Router();
import Posts from "../models/Posts.js/" 

router.post("/new", async (req,res)=>{
    const post = new Posts({
        text: req.body.text,
    })
    console.log(post);
    try{
        const newPost = await post.save()
        res.json(newPost)
    }catch(e){
        res.status(500).send(e)
    }
})

export default router
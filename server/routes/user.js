import express from "express"
const router = express.Router();
import Users from "../models/Users.js/" 

router.post("/new", async (req,res)=>{
    const user = new Users({
        name: req.body.name,
        password: req.body.password
    })
    console.log(user);
    try{
        const newUser = await user.save(
           // user,
        )
        res.json(newUser)
    }catch(e){
        res.status(500).send(e)
    }
})

export default router
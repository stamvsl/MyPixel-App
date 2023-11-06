import express from "express";
const router = express.Router();
import Posts from "../models/Posts.js";
import multer, { diskStorage } from "multer";
import path, { resolve } from "path";

var upload = multer({ dest: "images/" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post("/new", upload.single("image"), async (req, res, error) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Posts({
    image: url + "/images/" + req.file.filename,
    text: req.body.text,
  });
  console.log(post);

  try {
    const newPost = await post.save();
    res.json(newPost);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  Posts.findByIdAndDelete(id).catch((err) => {
    console.log(err);
  });
});

export default router;

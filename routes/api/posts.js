const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');

const validatePost = require('../../validation/post');


router.get("/test", (req, res) => res.json({ msg: "posts works" }));

router.post('/', passport.authenticate('jwt' , {session:false}), (req,res) => {
    const {errors, isValid } = validatePost(req.body);

    if(!isValid) {
        return res.status(404).json(errors);
    }


    const newPost = new Post({
        text:req.body.text,
        name:req.body.name,
        avatar:req.body.avatar,
        user:req.body.id 
    });

    newPost.save().then(post => res.json(post));
});




module.exports = router;

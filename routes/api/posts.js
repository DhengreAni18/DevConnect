const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');

const validatePost = require('../../validation/post');


router.get("/test", (req, res) => res.json({ msg: "posts works" }));

router.get('/', (req,res) => {
    Post.find()
    .sort({date: -1})
    .then (posts => res.json(posts))
    .catch(err => res.status(404).json({nopostfound:'No posts found'}));
});

router.get('/:id', (req,res) => {
    Post.findById(req.params.id)
    .then (post => res.json(post))
    .catch(err => res.status(404).json({nopost:'No post found'}));
});



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

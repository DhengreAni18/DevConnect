const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Profile = require('../../models/Profile');
const User = require('../../models/User');



router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;

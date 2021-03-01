const express = require('express'); //importing express
var router = express.Router();
const mongoose = require('mongoose');
const Img = mongoose.model('Img');
const img = require('../controllers/img')


router.route('/')
.get(img.get)//to get all user
.post(img.add)//to add user
.patch(img.update)//to update user


module.exports = router;

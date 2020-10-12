const express = require('express');
const mongoose = require('mongoose');
const posts = require('../models/postModels')

const route = express.Router();

route.post('/', async (req, res) => {
    const post = new posts({
        person: req.body.person,
        status: req.body.status
    });
    try{
        const postedData = await post.save();
        res.json(postedData);
    }catch(err){
        res.json({message: json})
    }
})

module.exports = route;
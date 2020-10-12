const express = require('express');
const mongoose = require('mongoose');
const posts = require('../models/postModels')

const route = express.Router();

route.post('/', (req, res) => {
    res.send(req.body);
})

module.exports = route;
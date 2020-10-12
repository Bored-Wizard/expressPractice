const express = require("express");
const posts = require('./routes/posts');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//MIDDLEWARE
app.use(bodyparser.json());
app.use("/posts", posts);

app.get("/", (req, res) => {
    res.send("This is the home page!");
});

mongoose.connect("mongodb+srv://sutron:tron@cluster0.a3b7b.mongodb.net/testdb1?retryWrites=true&w=majority",
{ useUnifiedTopology: true, useNewUrlParser: true },
() => {console.log("connected to db!")})

app.listen(3000, () => {console.log("Listening on port 3000")});
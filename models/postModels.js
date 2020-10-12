const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    person: [{
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    }],
    status: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("PostModel", postSchema)
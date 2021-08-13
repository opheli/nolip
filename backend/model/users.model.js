const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("user", UsersSchema)
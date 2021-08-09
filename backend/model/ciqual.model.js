const mongoose = require('mongoose')

const NolipSchema = new mongoose.Schema({
    alimNom: String,
    lipides: Number,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("nolips", NolipSchema)
const mongoose = require('mongoose')

const RecettesSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['APERITIF', 'ENTREE', 'DESSERT', 'PLAT']
    },
    image: String,
    title: String,
    note: String,
    ingredients: String,
    instructions: String,
    created: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("recette", RecettesSchema)
const express = require('express');
const router = express.Router();
const ModelCiqual = require('../data/ciqual.data')
const ModelRecettes = require('../model/recettes.model.js')
const  { debug } = require('./utils')

router.use(debug)

router.post('/add', async (req, res) => {
    const recetteData = req.body
    const newRecette = new ModelRecettes(recetteData)
    try {
        const recette = await newRecette.save();
        res.json({ success: true, message: `${recette}`})
    } catch (error) {
        res.json({ success: false, payload: error }, 500)
    }
})




router.get('/calculateur', async (req, res) => {
    try {
        const getAlimNom = await ModelCiqual.find().exec()
        res.json(getAlimNom)
    } catch (error) {
        res.status(500).json({ success: false, payload: error })
    }
})


router.all('*', (req, res) => {
    res.json({ message: '404 - Page Not Found' })
})

module.exports = router
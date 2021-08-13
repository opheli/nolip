const express = require('express');
const router = express.Router();
const ModelCiqual = require('../data/ciqual.data')
const ModelRecettes = require('../model/recettes.model.js')
const ModelUser = require('../model/users.model')
const { debug } = require('./utils')

router.use(debug)


//--------------route recettes-------------------
router.post('/add', async (req, res) => {
    const recetteData = req.body
    const newRecette = new ModelRecettes(recetteData)
    try {
        const recette = await newRecette.save();
        res.json({ success: true, message: `${recette}` })
    } catch (error) {
        res.json({ success: false, payload: error }, 500)
    }
})

router.get('/aperitifs', async (req, res) => {
    try {
        const getAperitif = await ModelRecettes.find({ type: 'APERITIF' }).exec()
        res.json(getAperitif)
    } catch (error) {
        res.status(500).json({ success: false, payload: error })
    }
})

router.get('/entrees', async (req, res) => {
    try {
        const getEntrees = await ModelRecettes.find({ type: 'ENTREE' }).exec()
        res.json(getEntrees)
    } catch (error) {
        res.status(500).json({ success: false, payload: error })
    }
})

router.get('/plats', async (req, res) => {
    try {
        const getPlats = await ModelRecettes.find({ type: 'PLAT' }).exec()
        res.json(getPlats)
    } catch (error) {
        res.status(500).json({ success: false, payload: error })
    }
})

router.get('/desserts', async (req, res) => {
    try {
        const getDesserts = await ModelRecettes.find({ type: 'DESSERT' }).exec()
        res.json(getDesserts)
    } catch (error) {
        res.status(500).json({ success: false, payload: error })
    }
})


//--------------jsonwebtoken-------------------
const jwt = require('jsonwebtoken')
const secretKey = 't5fr65852wccfdfg6h2wpo45znc'

//--------------route login-------------------
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await ModelUser.findOne({ username, password }).exec()
    if (user) {
        const token = jwt.sign(user.toJSON(), secretKey)
        res.json({ token })
    } else {
        res.json({ message: 'username invalid' })
    }
})


//--------------route calculateur-------------------
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
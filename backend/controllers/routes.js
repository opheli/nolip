const express = require('express');
const router = express.Router();
const ModelCiqual = require('../data/ciqual.data')
const  { debug } = require('./utils')

router.use(debug)

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
//const ModelCiqual = require('../model/ciqual.model');

function debug(req, res, next) {
    const date = new Date().toJSON()
    const { ip, method, path, protocol, httpVersion } = req
    console.log(`Ma requête est lancée : [HTTP] ${ip} - - [${date}] "${method} ${path} ${protocol}/${httpVersion}"`)
    next()
}

// const findAlimNom = async (alimNom) => {
//     try {
//         return await ModelCiqual.findOne({ alimNom: alimNom }).exec()
//     } catch (err) {
//         console.error(err)
//     }
// }

// findAlimNom()

module.exports = { debug }
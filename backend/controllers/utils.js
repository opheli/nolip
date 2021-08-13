//const ModelCiqual = require('../model/ciqual.model');

function debug(req, res, next) {
    const date = new Date().toJSON()
    const { ip, method, path, protocol, httpVersion } = req
    console.log(`Ma requête est lancée : [HTTP] ${ip} - - [${date}] "${method} ${path} ${protocol}/${httpVersion}"`)
    next()
}


module.exports = { debug }
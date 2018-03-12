const query = require('./connectQuery')
const article = require('./articleDbModule')
const user = require('./userDbModule')
const home = require('./homeDbModule')

let dbModule = {
    article,
    user,
    home
}
module.exports = dbModule



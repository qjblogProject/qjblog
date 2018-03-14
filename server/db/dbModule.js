const query = require('./connectQuery')
const article = require('./articleDbModule')
const user = require('./userDbModule')

let dbModule = {
    article,
    user
}
module.exports = dbModule



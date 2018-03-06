const query = require('./connectQuery')
const articel = require('./articelDbModule')
const user = require('./userDbModule')


let dbModule = {
    articel,
    user
}
module.exports = dbModule



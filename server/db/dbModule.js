const query = require('./connectQuery')
const article = require('./articleDbModule')
const user = require('./userDbModule')
const home = require('./homeDbModule')
const setting = require('./settingDbModule')

let dbModule = {
    article,
    user,
    home,
    setting
}
module.exports = dbModule



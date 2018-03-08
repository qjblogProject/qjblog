//此处引入api下的api文件
const apiIntercept = require('./common/apiIntercept')
const login = require('./login')
const register = require('./register')
const personalCenter = require('./personalCenter')
const home = require('./home')


module.exports = (app)=>{
    //在此处做app.use(api)
    app.use(apiIntercept)
    app.use(login)
    app.use(register)
    app.use(personalCenter)
    app.use(home)
}

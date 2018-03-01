//此处引入api下的api文件
const login = require('./login')
const register = require('./register')
const personalCenter = require('./personalCenter')


module.exports = (app)=>{
    //在此处做app.use(api)
    app.use(login)
    app.use(register)
    app.use(personalCenter)
}

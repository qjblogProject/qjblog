//此处引入api下的api文件
const login = require('./login')

module.exports = (app)=>{
    //在此处做app.use(api)
    app.use(login)
}

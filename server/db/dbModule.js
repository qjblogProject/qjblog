const query = require('./connectQuery')

module.exports = {
    login(data,callback){
        query('select * from user',(err,result)=>{
            callback(err,result)
        })
    }
}
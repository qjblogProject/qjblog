const query = require('./connectQuery')

module.exports = {
    login(data,callback){
        query('select * from user',(err,result)=>{
            callback(err,result)
        })
    },
    register(data,callback){
    	const sql = `insert into user(name,password,email,mobile,add_time,modi_time) values('${data.name}',${data.password},'${data.email}',${data.mobile},${data.time},${data.time})`;
    	query(sql,(err,result) => {
    		callback(err,result)
    	})
    }
}
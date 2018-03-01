const query = require('./connectQuery')

module.exports = {
    login(data,callback){
        const sql = `select * from user where name='${data.name}'`;
        query(sql,(err,result)=>{
            callback(err,result)
        })
    },
    register(data,callback){
        const select_sql = `select * from user where name='${data.name}'`;
        const insert_sql = `insert into user(name,password,email,mobile,add_time,modi_time) values('${data.name}','${data.password}','${data.email}',${data.mobile},${data.time},${data.time})`;
        // 查询用户名是否重复
        query(select_sql,(err,select_result)=>{
            if(!select_result.length){
                // 插入数据
                query(insert_sql,(err,insert_result) => {
                    console.log(insert_result)
                    callback(err,insert_result);
                })
            }else{
                // 用户已存在
                callback(err,{'exist':true});
            }
        })
    }
}
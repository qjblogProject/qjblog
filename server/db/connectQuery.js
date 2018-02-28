const mysql = require('mysql');
//创建链接池
const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'412552347a',
	database:'qjblog'
});

module.exports = (sql,callback)=>{  
    pool.getConnection(function(err,conn){  
        if(err){ 
            callback(err,null,null);  
        }else{  
            conn.query(sql,function(qerr,vals,fields){  
                //释放连接  
                conn.release(); 
                //事件驱动回调  
                callback(qerr,vals,fields);  
            });  
        }  
    });  
}
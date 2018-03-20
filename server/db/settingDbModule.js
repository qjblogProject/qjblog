
const query = require('./connectQuery')

module.exports = {
    saveTag(data,callback){
        const time = new Date().getTime();
        let sql = '';
        if(data.id){
            sql = `update category set name='${data.name}',modiTime=${time} where id=${data.id}`;
        }else{
            sql = `insert into category(name,addTime,modiTime) values('${data.name}',${time},${time})`;
        }
        query(sql,(err,result)=>{
            callback(err,result)
        })
    },
    getTagList(data,callback){
        let sql = `select id,name from category`;
        let sql1 = `select id,categoryId from article`;
        query(sql,(err,result)=>{
            if(err){
                callback(err,result)
            }else{
                query(sql1,(err1,result1)=>{
                    let rest = {
                        tags:result,
                        articles:result1
                    }
                    callback(err1,rest)
                })
            }
        })
    },
    deleteTag(data,callback){
        const time = new Date().getTime();
        let sql = `delete from category where id=${data.id}`;
        query(sql,(err,result)=>{
            callback(err,result)
        })
    }
}

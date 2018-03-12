
const query = require('./connectQuery')

module.exports = {
    //获取首页文章
    getArticleList(data,callback){
        let {keywords,tags,publishTime} = data;
        let sql = `select * from article`;

        query(sql,(err,result)=>{
            callback(err,result)
        })
    }
}

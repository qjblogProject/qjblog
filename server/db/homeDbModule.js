
const query = require('./connectQuery')

module.exports = {
    //获取首页文章
    getArticleList(data,callback){
        let {keywords,tags,publishTime} = data;
        let flag = true;
        let sql = `select a.id as articleId,a.title,a.content,a.categoryId,a.publishTime,a.abstract,b.name from article a,user b 
        where status=1 and a.userId=b.id`;
        if(keywords){
            sql += ` and (a.title like '%${keywords}%' or b.name like '%${keywords}%')`;
            flag = false;
        }
        // if(tags && tags.length > 0){ //先放在这，有问题
        //     flag = false;
        // }
        if(publishTime){
            const dateList = publishTime.split(',');
            const min = dateList[0],max = dateList[1];
            if(min == max){
                sql += ` and a.publishTime = ${min}`;
            }else{
                sql += ` and (a.publishTime >= ${min} and a.publishTime <= ${max})`;
            }
            
            flag = false;
        }
        sql += ` order by publishTime desc`
        //如果筛选条件为空，则截取最新8条数据
        if(flag){
            sql += ` limit 8` 
        }
        query(sql,(err,result)=>{
            callback(err,result)
        })
    },

    //获取全部数据
    getAllArticle(data,callback){
        let sql = `select id,title,publishTime from article where status=1 order by publishTime desc`
        query(sql,(err,result)=>{
            callback(err,result)
        })
    },

    getTagList(data,callback){
        let sql = `select id,name from category`
        query(sql,(err,result)=>{
            callback(err,result)
        })
    }
}

const query = require('./connectQuery')

module.exports = {
    //保存文章
    addArticel(data,callback){
        const time = new Date().getTime();
        const sql = '';
        if(data.articelId){
            sql = `update article set title= '${data.title}', content = '${data.content}',modi_time= ${time} where id = ${data.articelId}`;
        }else{
            sql = `insert into article(title,user_id,content,add_time,modi_time) values('${data.title}',${data.userId},'${data.content}',${time},${time})`;
        }
        query(sql,(err,result) => {
    		callback(err,result)
    	})
    },
    //保存草稿
    addArticelDraft(data,callback){
        const add_time = new Date().getTime();
        const sql = `insert into article_draft(title,user_id,content,add_time,modi_time) values('${data.title}',${data.userId},'${data.content}',${add_time},${add_time})`;
        query(sql,(err,result) => {
    		callback(err,result)
    	})
    },
    //获取个人文章列表
    getPersonalArticelList(data,callback){
        const tableName = data.type == 'draft' ? 'article_draft' : 'article';
        const status = data.type != 'draft' &&  data.type == 'publish' ? 1 : 0; 
        let sql = `select a.id,a.title,a.content,a.status,a.categoryId,a.modiTime,a.publishTime,b.name from ${tableName} a,user b where a.userId=${data.userId} and a.userId=b.id`;
        if(data.type == 'publish' || data.type == 'nopublish'){
            sql += ` and status=${status}`;
        }else if(data.type == 'draft'){
            sql = `select a.id,a.articleId,a.title,a.content,a.modiTime,b.name from ${tableName} a,user b where a.userId=${data.userId} and a.userId=b.id`;
        }
        query(sql,(err,result) => {
    		callback(err,result)
    	})
    }
}

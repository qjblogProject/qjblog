const query = require('./connectQuery')

module.exports = {
    //保存文章
    addArticel(data,callback){
        const add_time = new Date().getTime();
        const sql = `insert into article(title,user_id,content,add_time,modi_time) values('${data.title}',${data.userId},'${data.content}',${add_time},${add_time})`;
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
    }
}

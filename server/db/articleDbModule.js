
const query = require('./connectQuery')

module.exports = {
    //保存文章
    addArticle(data,callback){
        const time = new Date().getTime();
        let sql = '';
        if(data.articleId){
            sql = `update article set title= '${data.title}', content = '${data.content}',modiTime= ${time} where id = ${data.articleId}`;
        }else{
            sql = `insert into article(title,userId,content,addTime,modiTime) values('${data.title}',${data.userId},'${data.content}',${time},${time})`;
        }
        query(sql,(err,result) => {
            if(!err && data.articleId){
                const dsql = `delete from article_draft where articleId=${data.articleId}`
                query(dsql,(err1,result1)=>{
                    callback(err1,result1)
                })
            }else{
                callback(err,result)
            }
    		
    	})
    },
    //保存草稿
    addArticleDraft(data,callback){
        const time = new Date().getTime();
        const articleId = data.articleId || 0;
        let sql = '';
        if(data.draftId){
            sql = `update article_draft set title='${data.title}',content='${data.content}',modiTime=${time} where id=${data.draftId}`
        }else{
            sql = `insert into article_draft(articleId,title,userId,content,addTime,modiTime) values(${articleId},'${data.title}',${data.userId},'${data.content}',${time},${time})`;
        }
        query(sql,(err,result) => {
    		callback(err,result)
    	})
    },
    //发表文章
    publishArticle(data,callback){
        const time = new Date().getTime();
        const id = data.id;
        const sql = `update article set status=1,publishTime=${time}, modiTime=${time} where id=${id}`
        query(sql,(err,result) => {
    		callback(err,result)
    	})
    },
    //获取个人文章列表
    getPersonalArticleList(data,callback){
        const tableName = data.type == 'draft' ? 'article_draft' : 'article';
        const status = data.type != 'draft' &&  data.type == 'publish' ? 1 : 0; 
        let sql = `select a.id as articleId,a.title,a.status,a.categoryId,a.modiTime,a.publishTime,b.name from ${tableName} a,user b where a.userId=${data.userId} and a.userId=b.id`;
        let sqlTag = `select id,name from category`;
        if(data.type == 'publish' || data.type == 'nopublish'){
            sql += ` and status=${status}`;
        }else if(data.type == 'draft'){
            sql = `select a.id as draftId,a.articleId,a.title,a.modiTime,b.name from ${tableName} a,user b where a.userId=${data.userId} and a.userId=b.id`;
        }
        query(sql,(err,result) => {
            if(!err && data.type!='dratf'){
                query(sqlTag,(err1,result1)=>{
                    callback(err1,{
                        list:result,
                        tags:result1
                    })
                })
            }else{
                callback(err,result)
            }
    	})
    },
    getArticleEditDetail(data,callback){
        let sql = '';
        if(data.draftId){
            //查找article_draft表的详情,用于编辑草稿
            sql = `select id as draftId,articleId,title,content from article_draft where id=${data.draftId}`;
            query(sql,(err,result)=>{
                callback(err,result)
            })
        }else if(data.articleId){
            //查找article表的详情
            sql = `select id as articleId,title,content from article where id=${data.articleId}`;
            query(sql,(err,result)=>{
                if(result.length > 0){
                    const sql1 = `select id as draftId,articleId,title,content from article_draft where articleId=${result[0].articleId}`
                    query(sql1,(err1,result1)=>{
                        if(result1.length > 0){
                            callback(err1,result1)
                        }else{
                            callback(err,result)
                        }  
                    })
                }else{
                    callback(err,result)
                }
            })
        } 
    }
}

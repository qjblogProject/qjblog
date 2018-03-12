const express = require('express')
const router = express.Router()
const db = require('../db/dbModule')

//保存文章
router.post('/article/ajax-save-article',(req,res) => {
    let data = req.body;
    db.article.addArticle(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        //数据需要返回articleId
        const articleId = data.articleId || result.insertId;
        res.status(200).send({message:'文章保存成功',status:1,code:200,data:{articleId}});
    })
})

//保存草稿
router.post('/article/ajax-save-article-draft',(req,res) => {
    let data = req.body;
    db.article.addArticleDraft(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        //draftId
        const draftId = data.draftId || result.insertId;
        res.status(200).send({message:'草稿保存成功',status:1,code:200,data:{draftId}});
    })
})

//发表文章
router.post('/article/ajax-publish-article',(req,res) => {
    let data = req.body;
    if(!data.id){
        res.status(500).send({message:'发表id为空',status:0,code:500});
        return;
    }
    db.article.publishArticle(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        res.status(200).send({message:'文章发表成功成功',status:1,code:200,data:{}});
    })
})


//获取文章列表
router.post('/article/ajax-get-personal-article-list',(req,res) => {
    let data = req.body;
    data.userId = 3;
    db.article.getPersonalArticleList(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        let {list,tags=[]} = result;
        let tagsMap = {};
        //处理tag数据格式为id:name,
        tags.map((item)=>{
            tagsMap[item.id] = item.name;
        })
        //对数据做标签匹配（草稿列表不用）
        if(data.type != 'draft'){
            list.map((item)=>{
                if(item.categoryId){
                    const tagsTemp = item.categoryId.split(',');
                    let tags = [];
                    for(let elem of tagsTemp){
                        tags.push({id:elem,name:tagsMap[elem]})
                    }
                    item.tags = tags;
                }else{
                    return item.tags = [];
                }
            })
        }
        
        res.status(200).send({message:'获取成功',status:1,code:200,data:list});
    })
})

//获取文章编辑详情
router.post('/article/ajax-get-article-edit-detail',(req,res) => {
    let data = req.body;

    db.article.getArticleEditDetail(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        let data = result[0];
        if(data){
            res.status(200).send({message:'获取详情成功',status:1,code:200,data:data});
        }else{
            res.status(200).send({message:'未获取到文章',status:0,code:200,data:''});
        }
    })
})

module.exports = router
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

//获取文章列表
router.post('/article/ajax-get-personal-article-list',(req,res) => {
    let data = req.body;
    data.userId = 3;
    db.article.getPersonalArticleList(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        
        res.status(200).send({message:'获取成功',status:1,code:200,data:result});
    })
})

//获取文章详情
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
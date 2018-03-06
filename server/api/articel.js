const express = require('express')
const router = express.Router()
const db = require('../db/dbModule')

//保存文章
router.post('/articel/ajax-save-articel',(req,res) => {
    let data = req.body;
    db.articel.addArticel(data,(err,result)=>{
        if(err){
            res.status(500).send({massage:err,status:0,code:5000}); 
        }
        res.status(200).send({massage:'文章保存成功',status:1,code:200,id:result.insertId});
    })
})

//保存草稿
router.post('/articel/ajax-save-articel-draft',(req,res) => {
    let data = req.body;
    db.articel.addArticelDraft(data,(err,result)=>{
        if(err){
            res.status(500).send({massage:err,status:0,code:5000}); 
        }
        res.status(200).send({massage:'草稿保存成功',status:1,code:200,id:result.insertId});
    })
})

//获取文章列表
router.post('/articel/ajax-get-personal-articel-list',(req,res) => {
    let data = req.body;
    data.userId = 3;
    db.articel.getPersonalArticelList(data,(err,result)=>{
        if(err){
            res.status(500).send({massage:err,status:0,code:5000}); 
        }
        
        res.status(200).send({massage:'获取成功',status:1,code:200,data:result});
    })
})

module.exports = router
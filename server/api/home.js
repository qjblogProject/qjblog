const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')
const commonFunc = require('../common/commonFunc.js')

router.post('/home/ajax-get-basic-info',(req,res) => {
	let sessionName = req.session.username;
	let json = '';
	if(!!sessionName){
		json = commonFunc.formatJSON({"name":sessionName},true,"登陆成功",200);
	}else{
		json = commonFunc.formatJSON({},false,"登陆失效",500);
	}
	res.send(json);
})

//获取首页的文章列表
router.post('/home/ajax-get-article-list',(req,res) => {
	let data = req.data;
	db.home.getArticleList(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        res.status(200).send({message:'获取文章列表成功',status:0,code:200,data:result});
        
    })
})

module.exports = router
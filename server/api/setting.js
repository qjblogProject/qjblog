const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')

router.post('/set/ajax-save-tag',(req,res)=>{
    const data = req.body;
    db.setting.saveTag(data,(err,result)=>{
        if(err){
            res.status(500).send({status:0,message:err,code:500})
            return;
        }
        let returnData = {};
        if(!data.id && result.insertId){
            returnData.id = result.insertId;
        }
        res.status(200).send({status:1,message:'标签保存成功',data:returnData})
    })
})

router.post('/set/ajax-get-tag-list',(req,res) => {
	let data = req.body;
	db.setting.getTagList(data,(err,result)=>{
        if(err){
            res.status(500).send({message:err,status:0,code:500}); 
            return;
        }
        let tags = result.tags;
        let articles = result.articles;
        //数据处理
        for(let i = 0;i<tags.length;i++){
            tags[i].num = 0;
            for(let j = 0;j<articles.length;j++){
                let articleCategoryId = articles[j].categoryId;
                if(articleCategoryId && articleCategoryId.indexOf(tags[i].id) != -1){
                    tags[i].num++;
                }
            }
        }

        res.status(200).send({message:'获取标签分类列表成功',status:0,code:200,data:tags});
    })
})

router.post('/set/ajax-delete-tag',(req,res)=>{
    const data = req.body;
    if(!data.id){
        res.status(500).send({status:0,message:'标签id为空',code:500})
        return;
    }
    db.setting.deleteTag(data,(err,result)=>{
        if(err){
            res.status(500).send({status:0,message:err,code:500})
            return;
        }
        res.status(200).send({status:1,message:'标签删除成功',data:{}})
    })
})

router.get('/set',(req,res)=>{
    console.log('服务器路由请求：'+req.path)
})

module.exports = router
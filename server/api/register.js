const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')
const commonFunc = require('../common/commonFunc.js')


router.post('/register/ajax-register',(req,res) => {
	const data = req.body;
	data.time = new Date().getTime();
	db.register(data,(err,result) => {
		let json = '';
		if(!!result){
			let mes = '';
			if(result.exist){
				mes = '用户名已存在';
			}else if(result.serverStatus === 2){
				mes = '注册成功';

				//写入session
				req.session.name = {'username':data.name};
			}
			json = commonFunc.formatJSON({},true,mes,200);
		}else{
			json = commonFunc.formatJSON({},false,'注册失败',4001);
		}
		res.send(json);
	})
})

module.exports = router
const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')
const commonFunc = require('../common/commonFunc.js')


router.post('/register/ajax-register',(req,res) => {
	const data = req.body;
	data.time = new Date().getTime();
	db.user.register(data,(err,result) => {
		let json = '';
		// 错误处理
		if(err) {
			json = commonFunc.formatJSON({},false,'服务器错误',500);
			res.send(json);
		}

		if(!!result){
			let mes = '';
			if(result.exist){
				json = commonFunc.formatJSON({},false,'用户名已存在',200);
			}else if(result.serverStatus === 2){
				json = commonFunc.formatJSON({'name':data.name},true,'注册成功',200);

				//写入session
				req.session.username = data.name;
				req.session.userId = result.insertId;
			}
		}else{
			json = commonFunc.formatJSON({},false,'注册失败',500);
		}
		res.send(json);
	})
})

module.exports = router
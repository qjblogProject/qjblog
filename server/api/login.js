
const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')
const commonFunc = require('../common/commonFunc.js')


// 用户登录
router.post('/login/ajax-login',(req,res) => {
	const data = req.body;
	db.user.login(data,(err,result)=>{
		let json = '';
		result.forEach(item => {
			if(item.password === data.password){
				json = commonFunc.formatJSON({},true,"登陆成功",200);

				//写入session
				req.session.username = data.name;
			}else{
				json = commonFunc.formatJSON({},false,"登陆失败",4001);
			}
		})
	})
})

module.exports = router
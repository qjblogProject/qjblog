
const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')
const commonFunc = require('../common/commonFunc.js')


// 用户登录
router.post('/login/ajax-login',(req,res) => {
	const data = req.body;
	db.user.login(data,(err,result)=>{
		let json = '';
		// 错误处理
		if(err) {
			json = commonFunc.formatJSON({},false,'服务器错误',500);
			res.send(json);
		}

		result.forEach(item => {
			if(item.password === data.password){
				json = commonFunc.formatJSON({"name":data.name},true,"登陆成功",200);

				//写入session
				req.session.username = data.name;
			}else{
				json = commonFunc.formatJSON({},false,"登陆失败",4001);
			}
		})
<<<<<<< HEAD
=======
	    res.send(json)
>>>>>>> blog_zwy
	})
})

module.exports = router
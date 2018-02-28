const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')


router.post('/register/ajax-register',(req,res) => {
	const data = req.body;
	data.time = new Date().getTime();
	db.register(data,(err,result) => {
		let json = '';
		console.log(err);
		// if(result.serverStatus === 2){
		// 	json = formatJSON({},true,'注册成功',200);
		// }else{
		// 	json = formatJSON({},false,'注册失败',4001);
		// }
		res.send(json);
	})
})

module.exports = router

function formatJSON(data,status,message,code){
	let json = {
		code,
		data,
		message,
		status
	};
	return JSON.stringify(json);
}
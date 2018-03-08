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

module.exports = router
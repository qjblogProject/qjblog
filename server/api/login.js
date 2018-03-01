
const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')

// 用户登录
router.post('/login/ajax-login',(req,res) => {
	db.login({},(err,result)=>{
	    res.send(result)
	})
})

module.exports = router
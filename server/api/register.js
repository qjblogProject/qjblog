const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')


router.post('/register/ajax-register',(req,res) => {
	const data = req.body;
	data.time = new Date().getTime();
	db.register(data,(err,result) => {
		console.log(result);
	})
	res.send('register');
})

module.exports = router
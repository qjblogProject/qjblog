const express = require('express')
let router = express.Router()
const commonFunc = require('../../common/commonFunc.js')

router.use('/edit/:id',(req,res,next) => {
	let sessionName = !!req.session.username;
	if(!sessionName){
		let json = commonFunc.formatJSON({},false,'登陆过期',4001);
		res.send(json);
	}else{
		next();
	}
})

module.exports = router
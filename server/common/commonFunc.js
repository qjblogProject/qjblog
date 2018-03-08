const express = require('express')
let router = express.Router()

//格式化数据
exports.formatJSON = (data,status,message,code) => {
	let json = {
		code,
		data,
		message,
		status
	};
	return JSON.stringify(json);
}
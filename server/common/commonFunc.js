const express = require('express')
let router = express.Router()

//格式化数据
module.exports = {
	formatJSON(data,status,message,code){
		let json = {
			code,
			data,
			message,
			status
		};
		return JSON.stringify(json);
	},
	//Date类型格式化
	DateFormater(date, fmt){
		// console.info(date,'date----')
		if (typeof date == 'undefined') return '';
		if (typeof date != 'object') return date;
		let o = {
			"M+": date.getMonth() + 1,                 //月份
			"d+": date.getDate(),                    //日
			"h+": date.getHours(),                   //小时
			"m+": date.getMinutes(),                 //分
			"s+": date.getSeconds(),                 //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds()             //毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	
}
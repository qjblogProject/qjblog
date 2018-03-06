export default {
	//必填
	validateRequired(rule,value,callback) {
        var value = value.trim()
        if(value === ''){
            callback(new Error('不能为空！'))
        }else{
            callback()
        }
	 },
	//邮箱
	validateEmail(rule,value,callback){
	    var value = value.trim();
	    if(value === ''){
	        callback()
	        return
	    }
	    if(value != "" && !/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(value)){
	        callback(new Error("请输入正确邮箱！"));
	        return;
	    }
	    callback();
	},
	//密码
	validatePass(rule,value,callback){
		var value = value.trim();
		let reg = /^[a-zA-Z0-9]{6,8}$/;
		if(reg.test(value)){
			return callback();
		}else{
			return callback(new Error('请输入6～8位字符和数字'))
		}
	},
	// 手机号
	validateMobile(rule, value, callback){
	    if(value === ''){
	        callback()
	        return
	    }
	    if(!/^1[3-9][0-9]\d{8}$/.test(value)){
	        callback(new Error("请输入正确手机号！"));
	        return;
	    }
	    callback();
	},
}
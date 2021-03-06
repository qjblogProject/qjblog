import Vue from 'vue';
console.log(Vue)

//获取窗口高度
export const setWinHeight = ({commit}) => {
    var winHeight
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    commit('setWinHeight', winHeight)
}

//用户注册
export const setRegUser = ({commit},postData)=> {
	return new Promise((resolve) => {
		Vue.prototype.$http({
			url:'/register/ajax-register',
			method:'post',
			data:postData
		}).then(res => {
			let result = res.data;
			if(result.status){
				commit('updateUser',result.data);
			}
			resolve(result);
		})
	})
}

//用户登录
export const setLoginUser = ({commit},postData) => {
	return new Promise((resolve) => {
		Vue.prototype.$http({
			url:'login/ajax-login',
			method:'post',
			data:postData
		}).then((res)=>{
			let result = res.data;
			if(result.status){
				commit('updateUser',result.data);
			}
			resolve(result);
		})
	})
}
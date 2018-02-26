<template>
	<div class='login-wrap'>
		<div class='top'></div>
		<div class='sign-in'>
			<div class='title'>登录</div>
			<el-form 
				:model='loginForm' 
				:rules='rules' 
				ref='loginForm'
				label-width='80px'>
				<el-form-item label='用户名' prop='userName'>
					<el-input v-model.trim='loginForm.userName'></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model.trim='loginForm.password'></el-input>
				</el-form-item>
			</el-form>
			<el-button class='login-btn' type='primary'>登录</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		var validatPass = function(rule,value,callback){
			let reg = /^[a-zA-Z0-9]{8,12}$/;
			if(reg.test(value)){
				return callback();
			}else{
				return callback(new Error('请输入8～12位字符和数字'))
			}
		}
		return {
			loginForm:{
				userName:'',
				password:''
			},
			rules:{
				userName:[
					{ required: true, message: '不能为空', trigger: 'blur' },
            		{ min: 2, max: 8, message: '长度在 2 ～ 8 个字符', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '不能为空', trigger: 'blur' },
            		{ validator: validatPass, trigger: 'blur' }
				]
			}
		}
	}
}
</script>

<style lang='scss'>
.login-wrap{
	.top{
		height: 245px;
		background: #29a177;
	}
	.sign-in{
		width: 450px;
		box-shadow: 0 0 15px #c0c0c0;
		border-radius: 6px;
		position: relative;
		top: -80px;
		background: #fff;
		margin: 0 auto;
		padding: 30px;
		box-sizing: border-box;
	}
	.title{
		line-height: 44px;
		position: relative;
		top: -30px;
		margin: 0 -30px 15px;
		text-align: center;
		background: #0e5e45;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		color: #fff;
		font-size: 16px;
	}
	.el-form{
		margin-bottom:40px;
	}
	.login-btn{
		display: block;
		margin: 0 auto;
		padding-left: 30px;
		padding-right: 30px;
		background: #0e5e45;
		border-color:#0e5e45;
	}
}

</style>

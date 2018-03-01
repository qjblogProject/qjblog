<template>
	<div class='form-wrap'>
		<div class='top'></div>
		<div class='sign-in'>
			<div class='title'>登录</div>
			<el-form 
				:model='loginForm' 
				:rules='rules' 
				ref='loginForm'
				label-width='80px'>
				<el-form-item label='用户名' prop='name'>
					<el-input v-model.trim='loginForm.name'></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model.trim='loginForm.password'></el-input>
				</el-form-item>
			</el-form>
			<el-button class='login-btn' type='primary' @click="submitLoginForm('loginForm')">登录</el-button>
		</div>
	</div>
</template>

<script>
import Verify from 'assets/js/Verify.js';
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
				name:'',
				password:''
			},
			rules:{
				name:[
					{validator: Verify.validateRequired, trigger: 'blur'},
            		{ min: 2, max: 8, message: '长度在 2 ～ 8 个字符', trigger: 'blur' }
				],
				password:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					{validator: Verify.validatePass, trigger: 'blur'},
				],
			}
		}
	},
	methods:{
		submitLoginForm(formName){
			const t = this;
			t.$refs[formName].validate((valid) => {
				if(valid) {
					this.$http({
						url:'login/ajax-login',
						method:'post',
						data:t.loginForm
					}).then((res)=>{
						let result = res.data;
						if(result.status){
							t.$message({
								message:result.message,
								type:'success'
							})
						}else{
							t.$message({
								message:result.message,
								type:'error'
							})
						}
					})
				}else {
					return false;
				}
			})
		}
	}
}
</script>

<style lang='scss'>
@import '../../../src/assets/scss/form.scss'

</style>

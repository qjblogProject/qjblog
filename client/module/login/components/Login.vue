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
				<el-form-item label='用户名' prop='userName'>
					<el-input v-model.trim='loginForm.userName'></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model.trim='loginForm.password'></el-input>
				</el-form-item>
			</el-form>
			<el-button class='blog-btn login-btn' type='primary' @click="submitLoginForm('loginForm')">登录</el-button>
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
	},
	methods:{
		submitLoginForm(formName){
			const t = this;
			t.$refs[formName].validate((valid) => {
				if(valid) {
					this.$http({
						url:'login/ajax-login',
						method:'post'
					}).then((res)=>{
						console.log(res)
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

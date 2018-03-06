<template>
	<div class='form-wrap'>
		<div class='top'></div>
		<div class='sign-in'>
			<div class='title'>注册</div>
			<el-form 
				:model='regForm' 
				:rules='rules' 
				ref='regForm'
				label-width='80px'>
				<el-form-item label='邮箱' prop='email'>
					<el-input v-model.trim='regForm.email'></el-input>
				</el-form-item>
				<el-form-item label='手机号' prop='mobile'>
					<el-input v-model.trim='regForm.mobile'></el-input>
				</el-form-item>
				<el-form-item label='用户名' prop='name'>
					<el-input v-model.trim='regForm.name'></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model.trim='regForm.password'></el-input>
				</el-form-item>
				<el-form-item label='确认密码' prop='checkPassword'>
					<el-input v-model.trim='regForm.checkPassword'></el-input>
				</el-form-item>
			</el-form>
			<el-button class='login-btn' type='primary' @click="submitRegForm('regForm')">注册</el-button>
		</div>
	</div>
</template>
<script>
import Verify from 'assets/js/Verify.js';
export default { 
	data(){
		return {
			regForm:{
				email:'',
				mobile:'',
				name:'',
				password:'',
				checkPassword:''
			},
			rules:{
				email:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					// {validator: Verify.validateEmail, trigger: 'blur'},
				],
				mobile:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					{validator: Verify.validateMobile, trigger: 'blur'},
				],
				name:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					{ min: 2, max: 8, message: '长度在 2 ～ 8 个字符', trigger: 'blur' }
				],
				password:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					{validator: Verify.validatePass, trigger: 'blur'},
				],
				checkPassword:[
					{validator: Verify.validateRequired, trigger: 'blur'},
					{validator: (rule, value, callback)=>{
							let val = value.trim();
							if (val !== this.regForm.password) {
					          callback(new Error('两次输入密码不一致!'));
					        } else {
					          callback();
					        }
						}, trigger: 'blur'},
				]
			}
		}
	},
	methods:{
		submitRegForm(formName){
			const t = this;
			t.$refs[formName].validate(valid => {
				if(valid){
					//数据转换
					const postData = JSON.parse(JSON.stringify(t.regForm));
					delete postData.checkPassword;

					t.$store.dispatch('base/setRegUser',postData).then(res => {
						if(res.status){
							t.$message({
								message:res.message,
								type:'success'
							})
							t.$router.push('/home');
						}else {
							t.$message({
								message:res.message,
								type:'error'
							})
						}
					})
				}else{
					return false
				}
			})
		}
	}
}	
</script>
<style lang="scss">
@import '../../../src/assets/scss/form.scss'
</style>
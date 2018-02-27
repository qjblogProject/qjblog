<template>
	<div class='form-wrap'>
		<div class='top'></div>
		<div class='sign-in'>
			<div class='title'>登录</div>
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
			<el-button class='blog-btn login-btn' type='primary' @click="submitRegForm('regForm')">登录</el-button>
		</div>
	</div>
</template>
<script>
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
					{ required: true, message: '不能为空', trigger: 'blur' },
				],
				mobile:[
					{ required: true, message: '不能为空', trigger: 'blur' },
				],
				name:[
					{ required: true, message: '不能为空', trigger: 'blur' },
				],
				password:[
					{ required: true, message: '不能为空', trigger: 'blur' },
				],
				checkPassword:[
					{ required: true, message: '不能为空', trigger: 'blur' },
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

					t.$http({
						url:'/register/ajax-register',
						method:'post',
						data:postData
					}).then(res => {
						console.log(res)
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
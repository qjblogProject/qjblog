<template>
   	<div class="articel-edit">
		<div class='edit-menu clearfix'>
			<p class='menu-title fl'>
				文章编辑
				<span class='error-text'>{{errorText}}</span>
			</p>
			<p class='btn-group fr'>
				<el-button @click='handleSave'>保存</el-button>
				<el-button @click='handleSaveDraft'>存草稿</el-button>
			</p>
		</div>
		<div class='edit-content' :style='{"min-height":winHeight-60+"px"}'>
			<el-row class='articel-title'>
				<label class='fl'>文章标题</label>
				<el-col :span='9'>
					<el-input class='qj-input' v-model.trim="title" placeholder="请输入文章标题"></el-input>
				</el-col>
			</el-row>
			<div id='editorHead' class='editor-head'></div>
			<div id='editor'></div>
		</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import wangEditor from 'wangeditor'

export default {
	data(){
		return {
			editor:'',
			title:'',
			content:'',
			errorText:''
		}
	},
	computed:{
		...mapGetters('base',{
			winHeight:'getWinHeight'
		})
	},
	mounted(){
		this.createEditor();
	},
	methods:{
		//初始化wangEditor编辑器
		createEditor(){
			let t = this;
			t.editor = new wangEditor('#editorHead','#editor');
			t.editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
			t.editor.create();	
		},
		//获取文章编辑内容，并做content存储
		handleGetEditContent(){
			this.content = this.editor.txt.html();
		},
		handleSave(){
			let t = this;
			t.handleGetEditContent()

			//验证标题不能为空，为空return
			if(!t.checkTitle()){
				return ;
			}
			//ajax请求，保存文章
			t.$http({
				url:'/personal-center/ajax-save-articel',
				method:'post',
				data:{
					userId:3,
					title:t.title,
					content:t.content
				}
			}).then((res)=>{
				console.log(res)
			})
		},
		handleSaveDraft(){
			let t = this;
			t.handleGetEditContent()

			//验证标题不能为空，为空return
			if(!t.checkTitle()){
				return ;
			}
			//ajax请求，保存文章
			t.$http({
				url:'/personal-center/ajax-save-articel-draft',
				method:'post',
				data:{
					userId:3,
					title:t.title,
					content:t.content
				}
			}).then((res)=>{
				console.log(res)
			})
		},
		checkTitle(){
			if(this.title == ''){
				this.errorText = '标题为空无法保存';
				return false;
			}else{
				this.errorText = '';
				return true;
			}
		}
	}
}
</script>

<style lang='scss'>
.articel-edit{
	.edit-menu{
		box-sizing: border-box;
		position: fixed;
		z-index: 20000;
		top: 0;
		box-shadow: 0 1px 3px #e0e0e0;
		width: 100%;
		padding: 0 10%;
		height: 50px;
		background: #fff;
		.menu-title{
			line-height: 50px;
			font-weight: 500;
			.error-text{
				margin-left: 15px;
				font-weight: normal;
				color:#aaa;
			}
		}
		.btn-group{
			margin-top: 10px;
			.el-button{
				padding: 8px 10px;
			}
		}
	}
	.edit-content{
		margin-top:60px;
		padding-left: 10%;
		padding-right: 10%;
		background: #fff;
		box-shadow: 0 1px 3px #e0e0e0;
		.articel-title{
			padding: 40px 0 10px;
			label{
				width: 100px;
				line-height: 44px;
			}
			label:after{
				content: '';
				position: relative;
				top: 14px;
				float:right;
				margin-right: 15px;
				height: 16px;
				border-left: solid 1px #e0e0e0;
			}
			
		}
		.editor-head{
			margin: 20px auto 0;
			border-top: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
		}
		#editor{
			margin: 20px auto 0;
			min-height:300px;
			border-top: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
			.w-e-text{
				overflow: hidden;
				min-height: 300px;
			}
		}
	}
}

</style>

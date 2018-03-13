<template>
   	<div class="article-edit">
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
			<el-row class='article-title'>
				<label class='fl'>文章标题</label>
				<el-col :span='9'>
					<el-input class='qj-input' v-model.trim="title" placeholder="请输入文章标题"></el-input>
				</el-col>
			</el-row>
			<el-row class='article-abstract'>
				<label class='fl'>摘要</label>
				<el-col :span='15'>
					<el-input class='qj-input' type='textarea' v-model.trim="abstract" placeholder="请输入文章摘要"></el-input>
				</el-col>
			</el-row>
			<div id='editorHead' class='editor-head'></div>
			<div id='editor' :style='{"height":winHeight-330+"px"}'></div>
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
			articleId:'',
			draftId:'',
			title:'',
			abstract:'',
			content:'',
			errorText:''
		}
	},
	computed:{
		...mapGetters('base',{
			winHeight:'getWinHeight'
		}),
		...mapGetters('article',{
			articleData:'getArticleData'
		})
	},
	created(){
		//articleData存在则是编辑，需要获取详情回填
		if(this.articleData.articleId || this.articleData.draftId){
			this.getArticleEditDetail();
		}
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
		//获取草稿文章详情(以后会做已保存文章的编辑)
		getArticleEditDetail(){
			let t = this;
			let postData = {
				articleId:t.articleData.articleId,
				draftId:t.articleData.draftId
			}
			t.$store.dispatch('article/getArticleEditDetail',postData).then((res)=>{
				if(!res.status){
					t.$message.error(res.message)
					return;
				}
				let data = res.data;
				t.title = data.title;
				t.abstract = data.abstract;
				t.content = data.content;
				t.articleId = data.articleId;
				t.draftId = data.draftId;
				t.editor.txt.html(t.content)
			})
		},
		handleSave(){
			let t = this;
			t.handleGetEditContent()

			//验证标题不能为空，为空return
			if(!t.checkTitle()){
				return ;
			}
			//构造postData数据
			let postData = {
					userId:3,
					articleId:t.articleId,
					draftId:t.draftId,
					title:t.title,
					abstract:t.abstract,
					content:t.content
				}
			//ajax请求，保存文章
			t.$http({
				url:'/article/ajax-save-article',
				method:'post',
				data:postData
			}).then((res)=>{
				let data = res.data;
				if(!data.status){
					t.$message.error(data.message)
					return;
				}
				t.articleId = data.data.articleId;
				t.draftId = '';
				t.$message.success({type:'success',message:data.message})
			})
		},
		handleSaveDraft(){
			let t = this;
			t.handleGetEditContent()

			//验证标题不能为空，为空return
			if(!t.checkTitle()){
				return ;
			}
			//构造postData数据
			let postData = {
					userId:3,
					articleId:t.articleId,
					draftId:t.draftId,
					title:t.title,
					abstract:t.abstract,
					content:t.content
				}
			
			//ajax请求，保存文章
			t.$http({
				url:'/article/ajax-save-article-draft',
				method:'post',
				data:postData
			}).then((res)=>{
				let data = res.data;
				if(!data.status){
					t.$message.error(data.message)
					return;
				}
				t.draftId = data.data.draftId;
				t.$message({type:'success',message:data.message})
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
	},
	deactivated(){
		this.$destroy(); //默认不做先不做keep-alive
	}
}
</script>

<style lang='scss'>
.article-edit{
	.edit-menu{
		box-sizing: border-box;
		position: fixed;
		z-index: 100;
		top: 0;
		box-shadow: 0 1px 3px #e0e0e0;
		border-top: #a3bb51 solid 4px;
		width: 100%;
		padding: 0 10%;
		height: 54px;
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
		.article-title,.article-abstract{
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
		.article-abstract{
			padding-top: 20px;
		}
		.editor-head{
			margin: 20px auto 0;
			border-top: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
		}
		#editor{
			margin: 20px auto 0;
			// min-height:300px;
			// max-height:500px;
			border-top: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
			.w-e-text{
				overflow-y: auto;
				// min-height: 300px;
				// max-height:500px;
			}
		}
	}
}

</style>

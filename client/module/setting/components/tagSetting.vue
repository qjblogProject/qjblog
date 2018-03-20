<template>
	<div class='settings-wrap'>
		<ul class="tag-list clearfix">
			<li v-for="tagItem in tagList"
				:key="tagItem.name" 
				class='fl'
				@click='handleEditTag(tagItem)'>
				<el-tag
					class="tag-item"
					:closable='!tagItem.num'
					@close='handleCloseTag(tagItem)'>
					{{tagItem.name}}
				</el-tag>
			</li>
			<span v-if='tagList.length < 30'
				class="tag-add" 
				@click="handleAddTag">
				<i class="icon icon-add3"></i>
				添加标签
			</span>
		</ul>
		<el-dialog
			title="添加标签"
			:visible.sync="dialogAddTagVisible">
			<el-form
				:model="tagForm"
				label-position="right"
				label-width="100px"
				ref='tagForm'
				:rules="tagFormRules">
				<el-form-item label="标签名称" prop="name">
					<el-input
						v-model="tagForm.name"
						placeholder="最多输入16个字符">
					</el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="handleUpdateTag">保存更新</el-button>
				<el-button class="cancle" @click="handleCancelTag">取消</el-button>
			</span>
		</el-dialog> 
		<el-dialog
            title="删除标签"
            :visible.sync="dialogDeleteTagVisible"
            width="40%">
            <p class='dialog-text'>确认要删除标签 {{deleteTagName}} 吗？</p>
            <span slot="footer" class="dialog-footer">
                <el-button class='cancle' @click="dialogDeleteTagVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleConfirmDelete">确 定</el-button>
            </span>
        </el-dialog>
	</div>
</template>
<script>

import {mapGetters} from 'vuex';
export default {
	beforeCreate(){
		const t = this;
		t.$store.dispatch('setting/getTagList')
	},
	data(){
		var validateRepeat = (rule,value,callback) => {
			let t = this;
			for(let i = 0; i < t.tagList.length;i++){
				if(t.tagForm.id !=t.tagList[i].id && value == t.tagList[i].name){
					callback(new Error('标签名称重复'))
				}
			}
			callback();
		}
		return{
			type:'add',
			ajaxGetListLoading:true,
			dialogAddTagVisible:false,
			dialogDeleteTagVisible:false,
			tagForm:{
				name:'',
				id:''
			},
			deleteId:'',
			deleteTagName:'',
			tagFormRules:{
				name:[
					{ required: true, message: '不能为空', trigger: 'blur' },
					{ min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' },
					{ validator: validateRepeat, trigger: 'blur' }
				]
			}
		}
	},
	computed:{
		...mapGetters('setting',{
			tagList:'getTagList'
		})
		
	},
	methods:{
		handleAddTag(){
			const t = this;
			t.dialogAddTagVisible = true;
		},
		handleEditTag(item){
			let t = this;
			t.tagForm.id = item.id;
			t.tagForm.name = item.name;
			t.dialogAddTagVisible = true;
		},
		// 添加标签
		handleUpdateTag(){
			let t = this;
			let postData = t.tagForm;
			t.$refs['tagForm'].validate((valid)=>{
				if(valid){
					t.$http({
						url:'/set/ajax-save-tag',
						method:'post',
						data:postData
					}).then((res)=>{
						let data = res.data;
						if(!data.status){
							t.$message.error(data.message);
							return;
						}
						t.dialogAddTagVisible = false;
						t.$store.dispatch('setting/getTagList');
						t.$message.success(data.message);
					})
				}
			})
		},
		//删除tag
		handleCloseTag(tag){
			let t = this;
			t.deleteId = tag.id;
			t.deleteTagName = tag.name;
			t.dialogDeleteTagVisible = true;
		},
		handleConfirmDelete(){
			let t = this;
			t.$http({
				url:'/set/ajax-delete-tag',
				method:'post',
				data:{id:t.deleteId}
			}).then((res)=>{
				let data = res.data;
				if(!data.status){
					t.$message.error(data.message);
					return;
				}
				t.dialogDeleteTagVisible = false;
				t.$store.dispatch('setting/getTagList');
				t.$message.success(data.message);
			})
		},
		// 取消添加
		handleCancelTag(){
			const t = this;
			t.dialogAddTagVisible = false;
		},
	}
}
</script>
<style lang="scss">
.settings-wrap{
	.tag-list{
		padding:10px 35px;
		min-height:100px; 
		li{margin:0 12px 20px 0;}
		.tag-item {
			cursor: pointer;
			&.el-tag{
				background: #ffe4bc;
				border-color:#ea9907;
				color:#ea9907;
				.el-icon-close{
					color:#ea9907;
					&:hover{
						color: #fff;
						background:#ea9907;
					}
				}
				&:hover{
					color:#fff;
					background:#ea9907;
					.el-icon-close{
						color:#fff;
					}
				}
			}
		}
		.tag-add{
			display: inline-block;
			padding:0 5px;
			height:30px;
			line-height:30px;
			cursor:pointer;
			color: #999;
			.icon{
				position: relative;
				top: 2px;
				font-size: 16px;
				margin-right: 5px;
			}
			&:hover{
				color:#ea9907;
				.icon{
					color:#ea9907;
				}
			}
		}
	}
}
</style>
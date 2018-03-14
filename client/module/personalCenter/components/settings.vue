<template>
	<div class='settings-wrap'>
	    <head-item></head-item>
	    <div class='content'>
	        <el-tabs v-model="activeName">
	            <el-tab-pane label="标签设置" name="tag">
	               	<div class="tag-list">
	               		<el-tag
	               			class="tag-item"
							v-for="tagItem in tagsList"
							:key="tagItem.name"
							closable
	               		>{{tagItem.name}}({{tagItem.num}})</el-tag>
	               		<span class="tag-add" @click="handleAddTag"><i class="icon icon-add22"></i></span>
	               	</div>
	                <!-- <div v-if='ajaxGetListLoading' v-loading='ajaxGetListLoading'></div> -->
	            </el-tab-pane>
	        </el-tabs>
	       	<el-dialog
				title="添加标签"
				:visible.sync="dialogAddTagVisible"
	       	>
	       		<el-form
	       			:model="tagForm"
					label-position="right"
					label-width="100px"
					:rules="tagFormRules"
	       		>
	       			<el-form-item label="标签名称" prop="name">
	       				<el-input
	       					v-model="tagForm.name"
	       					placeholder="最多输入10个字符"
	       				></el-input>
	       			</el-form-item>
	       		</el-form>
	       		<span slot="footer" class="dialog-footer">
	       			<el-button type="primary" @click="handleUpdateTag">保存更新</el-button>
	       		    <el-button class="cancel" @click="handleCancelTag">取消</el-button>
	       		</span>
	       	</el-dialog> 
	    </div>
	</div>
</template>
<script>
import headItem from './comItem/headItem'

export default {
	data(){
		var validateRepeat = (rule,value,callback) => {
			console.log(1)
		}
		return{
			activeName:'tag',
			ajaxGetListLoading:true,
			tagsList:[
				{
					name:'css',
					num:0
				},
				{
					name:'HTML',
					num:0
				},
				{
					name:'javascript',
					num:0
				},
				{
					name:'电影',
					num:0
				},
			],
			dialogAddTagVisible:false,
			tagForm:{
				name:''
			},
			tagFormRules:{
				name:[
					{ required: true, message: '不能为空', trigger: 'blur' },
					{ min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' },
					{ validator: validateRepeat, trigger: 'blur' }
				]
			}
		}
	},
	methods:{
		handleAddTag(){
			const t = this;
			t.dialogAddTagVisible = true;
		},
		// 添加标签
		handleUpdateTag(){

		},
		// 取消添加
		handleCancelTag(){
			const t = this;
			t.dialogAddTagVisible = false;
		},
	},
	components:{
		'head-item': headItem
	}
}
</script>
<style lang="scss">
.settings-wrap{
    .content{
        margin-top: 10px;
        margin-bottom: 30px;
        background: #fff;
        .tag-list{
        	padding:10px 35px;
            min-height:100px; //#ea9907
            .tag-item {
            	margin:0 12px 20px 0;
            	cursor: pointer;
            	&.el-tag{
            		color:#fff;
            		height: 30px;
            		line-height:28px;
            		background:#ea9907;
            		border-radius:12px;
            		border:none;
            		.el-icon-close{
            			color:#fff;
            			&:hover{
            				background:#ea9907;
            			}
            		}
            		&:hover{
            			background:#f8a611;
            		}
            	}
            }
            .tag-add{
            	display: inline-block;
            	padding:0 5px;
            	height:30px;
            	line-height:28px;
            	cursor:pointer;
            	.icon{
            		font-weight:bolder;
            	}
            }
        }
        .el-loading-parent--relative{
            position: absolute!important;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
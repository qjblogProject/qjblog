<template>
    <div class='article-list'>
        <el-table
            :data="dataList"
            style="width: 100%">
            <el-table-column
                prop="title"
                label="文章标题"
                :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                prop="name"
                label="作者"
                width='120'>
            </el-table-column>
            <el-table-column
                prop="modiTime"
                label="更新时间"
                width='120'>
                <template slot-scope="scope">
                    <span>{{DateFormate(new Date(scope.row.modiTime),'yyyy-MM-dd')}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="modiTime"
                label="发表时间"
                v-if='type=="all" || type=="publish"'
                width='120'>
                <template slot-scope="scope">
                    <span v-if='scope.row.publishTime'>{{DateFormate(new Date(scope.row.publishTime),'yyyy-MM-dd')}}</span>
                    <span v-else></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                width='80'
                v-if='type!="draft"'>
                <template slot-scope="scope">
                    <span>{{scope.row.status==1?"已发表":"未发表"}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="categoryId"
                label="标签分类"
                v-if='type!="draft"'
                :show-overflow-tooltip='true'>
                <template slot-scope="scope">
                    <span v-if='scope.row.tags' 
                        class='category-tag'>
                        {{tagsName(scope.row.tags)}}
                    </span>
                    <span v-else></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="articleId"
                label="操作"
                width='170'>
                <template slot-scope="scope">
                    <span class='edit' @click='handleEditArticle(scope.row)'>编辑</span>
                    <span class='publish' @click='handlePublish(scope.row)' v-if='type != "draft" && scope.row.status==0'>发表</span>
                    <span class='tag-set' v-if='type != "draft"'>标签</span>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="发表文章"
            :visible.sync="publishDialogVisible"
            width="40%"
            class='publish-dialog'>
            <p class='dialog-text'>确认要发表文章 {{publishTitle}} 吗？</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="publishDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleConfirmPublish">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
import {DateFormater} from 'assets/js/commonFn'
export default {
    props:['dataList','type'],
    data(){
        return {
            publishDialogVisible:false,
            publishTitle:'',
            publishId:''
        }
    },
    methods:{
        ...mapMutations('article',{
            setArticleData:'setArticleData'
        }),
        DateFormate(date,ymd){
            return DateFormater(date,ymd)
        },
        //编辑草稿
        handleEditArticle(row){
            let t = this;
            //存储当前文章信息到store
            t.setArticleData({
                articleId:row.articleId || '',
                draftId:row.draftId || ''
            })
            t.$router.push('edit')
        },
        //发表文章
        handlePublish(row){
            this.publishId = row.articleId;
            this.publishTitle = row.title;
            this.publishDialogVisible = true;
        },
        //确认发表
        handleConfirmPublish(){
            let t = this;
            t.$http({
                url:'/article/ajax-publish-article',
                method:'post',
                data:{
                    id:t.publishId
                }
            }).then((res)=>{
                let data = res.data;
                if(!data.status){
                    t.$message.error(data.message);
                    return;
                }
                t.publishDialogVisible = false;
                t.$message.success({type:'success',message:data.message});
            })
        },
        tagsName(tags){
            let list = [];
            for(let tag of tags){
                list.push(tag.name)
            }
            return list.join(',')
        }
    }
    
}
</script>
<style lang='scss'>
.article-list{
    .publish,.tag-set,.edit{
        cursor: pointer;
        padding: 0 4px;
    }
    .publish{
        color:#43d480;
    }
    .tag-set{
        color:#0f88eb;
    }
    .edit{
        color:#ffcf01;
    }
    
}
.publish-dialog{
    .dialog-text{
        text-align: center;
    }
}

</style>

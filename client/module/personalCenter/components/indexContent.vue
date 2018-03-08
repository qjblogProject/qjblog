<template>
    <div class='personal-wrap'>
        <head-item></head-item>
        <div class='content'>
            <el-tabs v-model="activeName" @tab-click="handleChangeTab">
                <el-tab-pane label="全部文章" name="all">
                    <list-pane :dataList='dataList.all' :type='activeName' class='article-list'></list-pane>
                    <div v-if='ajaxGetListLoading' v-loading='ajaxGetListLoading'></div>
                </el-tab-pane>
                <el-tab-pane label="已发表" name="publish" v-loading='ajaxGetListLoading'>
                    <list-pane :dataList='dataList.publish' :type='activeName' class='article-list'></list-pane>
                    <div v-if='ajaxGetListLoading' v-loading='ajaxGetListLoading'></div>
                </el-tab-pane>
                <el-tab-pane label="未发表" name="nopublish">
                    <list-pane :dataList='dataList.nopublish' :type='activeName' class='article-list'></list-pane>
                    <div v-if='ajaxGetListLoading' v-loading='ajaxGetListLoading'></div>
                </el-tab-pane>
                <el-tab-pane label="草稿" name="draft">
                    <list-pane :dataList='dataList.draft' :type='activeName' class='article-list'></list-pane>
                    <div v-if='ajaxGetListLoading' v-loading='ajaxGetListLoading'></div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import headItem from './comItem/headItem'
import listPane from './comItem/listTab'
export default {
    data(){
        return{
            activeName:'all',
            ajaxGetListLoading:true,
            dataList:{
                all:[],
                publish:[],
                nopublish:[],
                draft:[]
            }
        }
    },
    created(){
        this.getArticleList()
    },
    methods:{
        handleChangeTab(tab){
            this.getArticleList();
        },
        getArticleList(){
            let t = this;
            t.$http({
                url:'/article/ajax-get-personal-article-list',
                method:'post',
                data:{
                    type:t.activeName
                }
            }).then((res)=>{
                let reply = res.data;
                t.dataList[t.activeName] = reply.data;
                t.ajaxGetListLoading = false;
            })
        }

    },
    components:{
        'head-item':headItem,
        'list-pane':listPane
    }
}

</script>
<style lang='scss'>
.personal-wrap{
    .top{
        background: url('../../../src/assets/img/bg.jpg') no-repeat left top;
        background-size:100% auto;
    }
    .user-msg{
        position: relative;
        margin-top: 90px;
        border-top: #d6d6d6 solid 1px;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        background: rgba(255,255,255,1);
        .head{
            margin: -40px 15px 0px 30px;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 56px;
            background: #eee;
            border: #fff solid 4px;
            border-radius: 75px;
        }
        .text{
            padding-top: 5px;
            line-height: 24px;
            &.user-name{
                font-size: 16px;
            }
            &.user-email{
                font-size: 12px;
                color:#ddd;
            }

        }
        .operation{
            position: absolute;
            bottom: 5px;
            right: 30px;
            li{
                cursor: pointer;
                font-size: 12px;
                color:#999;
                margin-left: 10px;
                line-height: 30px;
                &.edit:hover{
                    color:#ffcf01;
                }
                &.set:hover{
                    color:#43d480;
                }
            }
            
        }
    }
    .content{
        margin-top: 10px;
        margin-bottom: 30px;
        background: #fff;
        .article-list{
            min-height:100px;
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
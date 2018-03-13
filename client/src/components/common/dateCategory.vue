<template>
    <div class='date-category'>
        <collapse-component v-for='groupItem in dataList' 
            :title='groupItem.groupName+"("+groupItem.count+")"'
            :key='groupItem.date'
            :dataKey='groupItem.min+","+groupItem.max'
            @handleCollapseHead='handleCollapseHead'>
            <ul class='article-date-list'>
                <li v-for='articleItem in groupItem.articleList' 
                    :key='articleItem.id'
                    :title='articleItem.title'
                    @click='handleArticleItem(articleItem.id)'
                    class='article-item ellipsis'>
                    {{articleItem.title}}
                </li>
            </ul>
        </collapse-component>
    </div>
    
</template>

<script>
import collapseComponent from './collapse'
export default {
    props:{
        dataList:{
            type:Array,
            default:[]
        }
    },
	data(){
		return {
        
        }
    },
    methods:{
        handleArticleItem(id){
            this.$emit('handleArticleDetail',id)
        },
        handleCollapseHead(dataKey){
            this.$emit('handleCollapseHead',dataKey)
        }
    },
    components:{
        'collapse-component':collapseComponent
    }
}
</script>

<style lang='scss'>
.date-category{
    margin-bottom: 10px;
    padding: 20px 20px;
    border-radius: 4px;
    box-shadow: 0 0 4px#eee;
    background: #fff;
    .collapse-header{
        cursor: pointer;
        span:hover{
            color:#a3bb51;
        }
    }
    .article-date-list{
        padding-left: 15px;
        .article-item{
            cursor: pointer;
            width: 90%;
            font-size: 14px;
            line-height: 22px;
            color:#999;
            &:hover{
                color: #a3bb51;
            }
        }
    }
}
</style>

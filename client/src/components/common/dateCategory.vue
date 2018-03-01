<template>
    <div class='date-category'>
        <collapse-component v-for='groupItem in dataList' 
            :title='groupItem.groupName+"("+groupItem.count+")"'
            :key='groupItem.date'
            :dataKey='groupItem.date'
            @handleCollapseHead='handleCollapseHead'>
            <ul class='article-list'>
                <li v-for='articleItem in groupItem.articleList' 
                    :key='articleItem.id'
                    @click='handleArticleItem(articleItem.id)'
                    class='article-item'>
                    {{articleItem.name}}
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
            this.$emit('handleArticle',id)
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
    .article-list{
        padding-left: 20px;
        .article-item{
            cursor: pointer;
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

<template>
    <div class="filter-result-wrap clearfix">
        <p class='text fl'>找到<span class='count'>&nbsp;{{ totalCount }}&nbsp;</span>篇</p>
        <p class='tag-list fl'>

        </p>
        <p class='date-month fl'>&nbsp;{{dateMonthDesc(filterContent.publishTime)}}&nbsp;</p>
        <p class='text fl' v-if='filterContent.keywords'>关键字为：<span class='keyword'>{{filterContent.keywords}}&nbsp;</span></p>
        <p class='text fl'>的文章</p>
        <span class='cancel-filter fl' @click='handleClearFilter'>取消筛选</span>
    </div>
</template>

<script>
import {DateFormater} from 'assets/js/commonFn'
export default {
    props:{
        totalCount:{
            type:Number,
            default:0
        },
        filterContent:{
            type:Object,
            default:()=>{
                return{}
            }
        }
    },
	data(){
		return{}
    },
    methods:{
        dateMonthDesc(dateChange){
            if(!dateChange){
                return ''
            }
            let dateList = dateChange.split(',')
            let min = dateList[0]
            return DateFormater(new Date(Number(min)),'yyyy年MM月');
        },
        handleClearFilter(){
            this.$emit('handleClearFilter')
        }
    }
}
</script>

<style lang='scss'>
.filter-result-wrap{
    background: #fff;
    border-radius: 4px;
    padding: 12px 20px;
    margin-top: 10px;
    .text{
        color:#999;
    }
    .tag-list{

    }
    .cancel-filter{
        cursor: pointer;
        margin-left: 10px;
        color: #999;
        border-bottom: #999 solid 1px;
        &:hover{
            color:#a3bb51;
            border-color: #a3bb51;
        }
    }
    .count,.keyword,.date-month{
        color:#a3bb51
    }
    
}
</style>

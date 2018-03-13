<template>
    <div class="search-wrap">
        <el-input 
            placeholder="请输入搜索标题／作者"
            prefix-icon="el-icon-search"
            v-model="kewords"
            @keyup.enter="handlerTriggerSearch">
        </el-input>
        <i v-if='kewords' @click='handleClearSeach' class='icon icon-delete6'></i>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        }
    },
	data(){
		return {
            kewords:''
        }
    },
    methods:{
        handleClearSeach(){
            let t = this;
            t.kewords = '';
            t.$emit('handleSeach',t.kewords)
        },
        handlerTriggerSearch(){
            let t = this;
            this.$emit('handleSeach',t.kewords)
        }
    }
}
</script>

<style lang='scss'>
.search-wrap{
    position: relative;
    margin-bottom: 10px;
    .icon-delete6{
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 12px;
    }
    
}
</style>

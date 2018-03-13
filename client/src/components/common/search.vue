<template>
    <div class="search-wrap">
        <input 
            class='search-input'
            placeholder="请输入搜索标题／作者"
            prefix-icon="el-icon-search"
            v-model="kewords"
            @keyup.13="handlerTriggerSearch" />
        <i class='icon icon-search'></i>
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
    watch: {
        value(newVal,oldVal){
            if(newVal == this.kewords){
                return;
            }
            this.kewords = newVal
        }
    },
    methods:{
        handleClearSeach(){
            let t = this;
            t.kewords = '';
            t.$emit('handleSeach',t.kewords,t.value)
        },
        handlerTriggerSearch(){
            let t = this;
            this.$emit('handleSeach',t.kewords,t.value)
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
    .search-input{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 1;
        outline: 0;
        padding: 0 30px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
    }
    .icon-search{
        position: absolute;
        left: 8px;
        top: 13px;
        color:#c0c4cc;
    }
    
}
</style>

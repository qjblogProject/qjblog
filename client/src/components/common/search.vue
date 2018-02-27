<template>
    <div class="search">
        <el-input 
            placeholder="请输入搜索标题／作者"
            prefix-icon="el-icon-search"
            v-model="kewords">
        </el-input>
        <i v-if='kewords' @click='handleClearSeach' class='icon icon-delete6'></i>
    </div>
</template>

<script>
export default {
	data(){
		return {
            kewords:''
        }
    },
    methods:{
        handleClearSeach(){
            let t = this;
            t.kewords = '';
            t.$emit('handleClearSeach',t.kewords)
        },
        handleSeach(){
            let t = this;
            this.$emit('handleClearSeach',t.kewords)
        }
    }
}
</script>

<style lang='scss'>
.search{
    position: relative;
    .icon-delete6{
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 12px;
    }
    
}
</style>

<template>
    <div class="search">
        <el-input 
            placeholder="请输入搜索标题／作者"
            prefix-icon="el-icon-search"
            v-model="keword">
        </el-input>
        <i v-if='keword' @click='handleClearSeach' class='icon icon-delete6'></i>
    </div>
</template>

<script>
export default {
	data(){
		return {
            keword:''
        }
    },
    methods:{
        handleClearSeach(){
            let t = this;
            t.keword = '';
            t.$emit('handleClearSeach',t.keword)
        },
        handleSeach(){
            let t = this;
            this.$emit('handleClearSeach',t.keword)
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

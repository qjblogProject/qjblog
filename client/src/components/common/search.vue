<template>
    <div class="search">
        <el-input 
            placeholder="请输入搜索标题／作者"
            prefix-icon="el-icon-search"
            v-model="keword">
        </el-input>
    </div>
</template>

<script>
export default {
	data(){
		return {
            keword:''
        }
	}
}
</script>

<style lang='scss'>
.search{

    
}
</style>

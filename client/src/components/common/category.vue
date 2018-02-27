<template>
    <ul class="tag-list clearfix">
        <li v-for='item in list' 
            :key='item.id' class='fl' 
            :class='"color-"+Math.floor(Math.random()*(10-1+1)+1)'
            @click="handleClickTag(item.id)">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
export default {
	data(){
		return {
            list:[{name:'html',id:1},{name:'css',id:2},{name:'java',id:3},{name:'php',id:4},{name:'canvs',id:5},{name:'sql',id:6}]
        }
    },
    methods:{
        handleClickTag(id){
            this.$emit('click',id)
        }
    }
}
</script>

<style lang='scss'>
.tag-list{
    margin-bottom: 10px;
    padding: 25px 20px 15px;
    border-radius: 4px;
    box-shadow: 0 0 4px#eee;
    background: #fff;
    li{
        cursor: pointer;
        margin-right: 15px;
        margin-bottom: 20px;
        padding: 0 10px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        &.color-1,&.color-8{
            background:#a3bb51;
            &:hover{
                background:#bbdb4c;
            }
        }
        &.color-2,&.color-7{
            background:#47c57c;
            &:hover{
                background:#43d480;
            }
        }
        &.color-3,&.color-10{
            background:#0f88eb;
            &:hover{
                background:#3aa6ff;
            }
        }
        &.color-4,&.color-6{
            background:#ea9907;
            &:hover{
                background:#f8a611;
            }
        }
        &.color-5,&.color-9{
            background:#e6ca05;
            &:hover{
                background:#f1d50d;
            }
        }
    }
}
</style>

<template>
    <ul class="tag-category clearfix">
        <li v-for='item in dataList' 
            :key='item.id' class='fl' 
            :class='["color-"+Math.floor(Math.random()*(10-1+1)+1),{disabled:hasCheck(item.id)}]'
            @click="handleClickTag(item)">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        dataList:{
            type:Array,
            default:[]
        },
        filterList:{
            type:Array,
            default:[]
        }
    },
	data(){
		return {
            
        }
    },
    methods:{
        handleClickTag(item){
            if(this.hasCheck(item.id)){
                return;
            }
            this.$emit('handleClickTag',item)
        },
        hasCheck(id){
            let t = this;
            for(let item of t.filterList){
                if(id == item.id){
                    return true;
                }
            }
        }
    }
}
</script>

<style lang='scss'>
.tag-category{
    margin-bottom: 10px;
    padding: 25px 20px 5px;
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
        &.disabled{
            background:#ccc!important;
        }
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

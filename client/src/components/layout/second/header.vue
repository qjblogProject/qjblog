<template>
    <div class="header-second-wrap clearfix">
        <p class='title' :class='[titlePosition=="center" ? "center" : "left"]'>{{title}}</p>
        <i class='icon el-icon-close' @click='handleClose'></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        titlePosition:{
            type:String,
            default:'center'
        }
    },
	data(){
		return {
            
        }
    },
    methods:{
        handleClose(){
            this.$router.back()
        }
    }
}
</script>

<style lang='scss'>
.header-second-wrap{
    position: fixed;
    top: 0;
    box-sizing:border-box;
    padding: 0 10% 0 5%;
    width: 100%;
    height: 60px;
    background: #FFF;
    box-shadow: 0 1px 3px #e0e0e0;
    border-top: #a3bb51 solid 4px;
    .title{
        line-height: 56px;
        font-size: 16px;
    }
    .center{
        text-align: center;
    }
    .left{
        padding: 0 20px;
        float: left;
    }
    .el-icon-close{
        cursor: pointer;
        position: absolute;
        right: 14px;
        top: 3px;
        padding: 10px;
        font-size: 26px;
        color: #999;
        font-weight: 500;
        &:hover{
            color:#a3bb51;
        }
    }
}
</style>

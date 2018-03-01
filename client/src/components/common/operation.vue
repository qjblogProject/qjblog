<template>
    <div class="fast-operation clearfix">
        <router-link to='/edit' target='_blank' class='fl'>
            <i class='icon icon-edit'></i>
            <span class='edit'>写文章</span>
        </router-link>
        <a href='javascript:void(0);' @click='han' class='fl'>
            <i class='icon icon-visible'></i>
            <span class='visible'>发表</span>
        </a>
        <router-link to='/' class='fl'>
            <i class='icon icon-set'></i>
            <span class='set'>设置</span>
        </router-link>
    </div>
</template>

<script>
export default {
	data(){
		return {}
    },
    methods:{
        han(){
            console.log(22)
        }
    }
}
</script>

<style lang='scss'>
.fast-operation{
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow:0 0 4px #eee;
    padding: 25px 20px;
    a{
        cursor: pointer;
        width:33.33%;
        i,span{
            display: block;
            text-align:center;
        }
        i{
            margin-bottom: 8px;
            font-size: 26px;
            &.icon-edit{
                color:#ffcf01;
            }
            &.icon-visible{
                color:#43d480;
            }
            &.icon-set{
                color:#0f88eb;
            }
        }
        &:hover{
            span.edit{
                color:#ffcf01;
            }
            span.visible{
                color:#43d480;
            }
            span.set{
                color:#0f88eb;
            }
        }

    }
}
</style>

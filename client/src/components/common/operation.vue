<template>
    <ul class="fast-operation clearfix">
        <li class='fl'>
            <i class='icon icon-edit'></i>
            <span class='edit'>写文章</span>
        </li>
        <li class='fl'>
            <i class='icon icon-visible'></i>
            <span class='visible'>发表</span>
        </li>
        <li class='fl'>
            <i class='icon icon-set'></i>
            <span class='set'>设置</span>
        </li>
    </ul>
</template>

<script>
export default {
	data(){
		return {}
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
    li{
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

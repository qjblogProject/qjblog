<template>
    <div class="bl-collapse" :class='{show:showDown}'>
            <p class='collapse-header'>
                <span @click='handleCollapseHead(dataKey)'>{{title}}</span>
                <i class='icon icon-triangle' @click='handleTrigger'></i>
            </p>
            <slot></slot>
    </div>
</template>

<script>
export default {
    props:['title','dataKey'],
	data(){
		return {
            showDown:false
        }
    },
    methods:{
       handleTrigger(){
           this.showDown = !this.showDown;
       },
       handleCollapseHead(dataKey){
           this.$emit('handleCollapseHead',dataKey)
       }
    }
}
</script>

<style lang='scss'>
.bl-collapse{
    height: 26px;
    overflow: hidden;
    transition: height .2s;
    &.show{
        height: auto;
        .collapse-header .icon-triangle{
            transform: rotate(180deg)
        }
    }
    .collapse-header{
        position: relative;
        line-height: 26px;
        .icon-triangle{
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 5px;
            &:hover{
                color:#a3bb51;
            }
        }
    }
}
</style>

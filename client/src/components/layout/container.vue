<template>
   <div class="container" :class='{"have-right":haveRight}' :style='{"min-height":(winHeight-90-24)+"px"}'>
    	<slot name='filterResult'></slot>
        <slot name='content'></slot>
        <slot name='sidebar'></slot>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:{
        haveRight:{
            type:Boolean,
            default:false
        }
    },
	data(){
		return {}
    },
    computed:{
		...mapGetters('base',{
			winHeight:'getWinHeight'
		})
	},
    
}
</script>

<style lang='scss'>
.container{
    position: relative;
    margin: 0 5%;
    padding-top: 90px;
    &.have-right{
        padding-right:300px;
    }
}


</style>

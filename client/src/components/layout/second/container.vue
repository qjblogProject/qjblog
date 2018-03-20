<template>
   <div class="second-container" :style='{"min-height":(winHeight-70)+"px"}'>
        <slot></slot>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
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
.second-container{
    position: relative;
    margin-top: 70px;
    padding: 0 5%;
    background: #fff;
}


</style>

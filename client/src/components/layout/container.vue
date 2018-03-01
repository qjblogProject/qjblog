<template>
   <div class="container">
    	<slot name='content'></slot>
        <slot name='sidebar'></slot>
    </div>
</template>

<script>
export default {
	data(){
		return {}
    }
}
</script>

<style lang='scss'>
.container{
    position: relative;
    margin: 0 10%;
    padding-top: 90px;
}

</style>

<template>
    <div class="sidebar">
        <slot name='operation'></slot>
        <slot name='category'></slot>
        <slot name='search'></slot>
        <slot name='dateMenu'></slot>
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
.sidebar{
    position: fixed;
    right: 5%;
    top: 90px;
    padding-top: 10px;
    width: 290px;
    min-height:400px;
}
</style>

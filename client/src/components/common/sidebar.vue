<template>
    <div class="sidebar">
        <slot name='operation'></slot>
        <slot name='tagCategory'></slot>
        <slot name='search'></slot>
        <slot name='dateCategory'></slot>
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
    right: 10%;
    top: 90px;
    padding-top: 10px;
    width: 290px;
    min-height:400px;
}
</style>

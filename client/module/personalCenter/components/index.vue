<template>
    <div class='personal'>
        <header-component></header-component>
		<container-component>
			<!--个人主页内容-->
			<personal-component slot='content'></personal-component>
		</container-component>
		<footer-component></footer-component>
    </div>
</template>
<script>
import headerComponent from 'components/layout/header'
import footerComponent from 'components/layout/footer'
import containerComponent from 'components/layout/container'
import personalContent from './indexContent'

export default {
    data(){
        return{
        
        }
    },
    components:{
		'header-component':headerComponent,
		'footer-component':footerComponent,
		'container-component':containerComponent,
		'personal-component':personalContent
	},
	deactivated(){
		this.$destroy(); //默认不做先不做keep-alive
	}
}

</script>
<style lang='scss'>

</style>
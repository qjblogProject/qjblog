<template>
    <div class='personal'>
        <header-component></header-component>
		<container-component>
			<!--个人主页内容-->
			<personal-component v-if="componentName === 'personal'"  slot='content'></personal-component>
			<!-- 设置页内容 -->
			<settings-component v-else-if="componentName === 'set'" slot='content'></settings-component>
		</container-component>
		<footer-component></footer-component>
    </div>
</template>
<script>
import headerComponent from 'components/layout/header'
import footerComponent from 'components/layout/footer'
import containerComponent from 'components/layout/container'
import personalContent from './indexContent'
import settingsComponent from './settings.vue'

export default {
    data(){
        return{
        	componentName:''
        }
    },
    components:{
		'header-component':headerComponent,
		'footer-component':footerComponent,
		'container-component':containerComponent,
		'personal-component':personalContent,
		'settings-component':settingsComponent
	},
	beforeRouteEnter(to,from,next) {
		let componentName = to.path.slice(1);

		next(vm => {
			vm.componentName = componentName;
		});
	}
}

</script>
<style lang='scss'>

</style>
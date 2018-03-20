<template>
   	<div class='set-wrap'>
		<second-header-component title='设置'></second-header-component>
		<second-container-component>
			<el-tabs v-model="activeName">
				<el-tab-pane label="标签设置" name="tag">
					<tag-stting></tag-stting>
				</el-tab-pane>
			</el-tabs>
		</second-container-component>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import tagStting from './tagSetting'
import secondContainerComponent from 'components/layout/second/container'
import secondHeaderComponent from 'components/layout/second/header'

export default {
	beforeCreate(){
		const t = this;
		t.$store.dispatch('base/getUserInfo')
	},
	data(){
		return {
			activeName:'tag',
		}
	},
	computed:{
		...mapGetters('base',{
			'userInfo':'getUserInfo'
		}),
	},
	components:{
		'tag-stting':tagStting,
		'second-container-component':secondContainerComponent,
		'second-header-component':secondHeaderComponent
	},
	deactivated(){
		this.$destroy(); //默认不做先不做keep-alive
	}

}
</script>

<style lang='scss'>
.set-wrap{
	
}
</style>

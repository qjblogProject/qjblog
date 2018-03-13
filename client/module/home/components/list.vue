<template>
   	<ul class="article-list">
		<list-item v-for='item in tableList' :key='item.id' :itemData='item'></list-item>
    </ul>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import listItem from './listItem'

export default {
	data(){
		return {}
	},
	computed:{
		...mapGetters('home',{
			tableList:'getTableList'
		})
	},
	components:{
		'list-item':listItem
	},
	created(){
		this.getTableList();
	},
	methods:{
		...mapActions('home',{
			getTableList:'getTableList'
		})
	}

}
</script>

<style lang='scss'>
.article-list{
	position: relative;
	margin-top: 10px;
}
</style>

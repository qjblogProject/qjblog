<template>
   <div id="home">
    	<header-component></header-component>
		<container-component>
			<list-component slot='content'></list-component>
			<sidebar-component slot='sidebar'>
				<operation-component slot='operation'></operation-component>
				<category-component 
					slot='category'
					@click='clickH'>
				</category-component>
				<search-component slot='search'></search-component>
			</sidebar-component>
		</container-component>
		<footer-component></footer-component>
    </div>
</template>

<script>
import headerComponent from 'components/layout/header'
import footerComponent from 'components/layout/footer'
import containerComponent from 'components/layout/container'
import listComponent from './list'
import sidebarComponent from 'components/common/sidebar'
import operationComponent from 'components/common/operation'
import categoryComponent from 'components/common/category'
import searchComponent from 'components/common/search'

export default {
	data(){
		return {

		}
	},
	methods:{
		clickH(id){
			console.log(id)
		}
	},
	components:{
		'header-component':headerComponent,
		'footer-component':footerComponent,
		'container-component':containerComponent,
		'list-component':listComponent,
		'sidebar-component':sidebarComponent,
		'operation-component':operationComponent,
		'category-component':categoryComponent,
		'search-component':searchComponent
	}
}
</script>


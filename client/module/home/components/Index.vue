<template>
   <div id="home">
    	<header-component></header-component>
		<container-component>
			<list-component slot='content'></list-component>
			<sidebar-component slot='sidebar'>
				<operation-component slot='operation'></operation-component>
				<tag-category-component 
					slot='tagCategory'
					@click='clickH'>
				</tag-category-component>
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
import tagCategoryComponent from 'components/common/tagCategory'
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
		'tag-category-component':tagCategoryComponent,
		'search-component':searchComponent
	}
}
</script>


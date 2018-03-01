<template>
   <div id="home">
    	<header-component></header-component>
		<container-component>
			<!--主页内容-->
			<list-component slot='content'></list-component>
			<!--主页右侧区域栏-->
			<sidebar-component slot='sidebar'>
				<!--快捷操作组建-->
				<operation-component slot='operation'></operation-component>
				<!--标签分类组建-->
				<tag-category-component 
					slot='tagCategory'
					:dataList='tagList'
					@click='clickH'>
				</tag-category-component>
				<!--关键字搜索组建-->
				<search-component slot='search'></search-component>
				<!--时间分类组建-->
				<date-category-component
					slot='dateCategory'
					:dataList='dateCategoryList'
					@handleCollapseHead='handleCollapseHead'>
				</date-category-component>
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
import dateCategoryComponent from 'components/common/dateCategory'
export default {
	data(){
		return {
			tagList:[{name:'html',id:1},{name:'css',id:2},{name:'java',id:3},{name:'php',id:4},{name:'canvs',id:5},{name:'sql',id:6}],
			dateCategoryList:[
                {
                    groupName:'2018年4月',
                    date:475973897,
                    count:2,
                    articleList:[
                        {name:'呼呼呼',id:123},
                        {name:'lalal',id:124},
                        {name:'znfknjk',id:125}
                    ]
                },
                {
                    groupName:'2018年2月',
                    date:475921324,
                    count:7,
                    articleList:[
                        {name:'呼呼说',id:126},
                        {name:'手机发了',id:127},
                        {name:'叫我诶',id:128}
                    ]
                },
                {
                    groupName:'2018年2月',
                    date:4753849324,
                    count:7,
                    articleList:[
                        {name:'呼呼说',id:126},
                        {name:'手机发了',id:127},
                        {name:'叫我诶',id:128}
                    ]
                },
                {
                    groupName:'2018年2月',
                    date:475231324,
                    count:7,
                    articleList:[
                        {name:'呼呼说',id:126},
                        {name:'手机发了',id:127},
                        {name:'叫我诶',id:128}
                    ]
                }
            ]
		}
	},
	methods:{
		clickH(id){

		},
		handleCollapseHead(dataKey){

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
		'search-component':searchComponent,
		'date-category-component':dateCategoryComponent
	}
}
</script>


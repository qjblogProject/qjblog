<template>
   <div id="home">
    	<header-component :user="userInfo.name"></header-component>
		<container-component :have-right='true'>
			<!--筛选结果-->
			<filter-result 
				v-if='filterContent.keywords || filterContent.publishTime || filterContent.tags.length > 0' 
				slot='filterResult' 
				:totalCount='totalCount' 
				:filterContent='filterContent'
				@handleClearFilter='handleClearFilter'
				@handleCloseTag='handleCloseTag'></filter-result>
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
					:filterList='filterContent.tags'
					@handleClickTag='handleClickTag'>
				</tag-category-component>
				<!--关键字搜索组建-->
				<search-component slot='search' 
					:value='filterContent.keywords'
					@handleSeach='handleSeach'></search-component>
				<!--时间分类组建-->
				<date-category-component
					slot='dateCategory'
					:dataList='dateList'
					@handleCollapseHead='handleCollapseHead'
					@handleArticleDetail='handleArticleItem'>
				</date-category-component>
			</sidebar-component>
		</container-component>
		<footer-component></footer-component>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import headerComponent from 'components/layout/header'
import footerComponent from 'components/layout/footer'
import containerComponent from 'components/layout/container'
import listComponent from './list'
import sidebarComponent from 'components/common/sidebar'
import operationComponent from 'components/common/operation'
import tagCategoryComponent from 'components/common/tagCategory'
import searchComponent from 'components/common/search'
import dateCategoryComponent from 'components/common/dateCategory'
import filterResult from 'components/common/filterResult'
export default {
	beforeCreate(){
		const t = this;
		t.$store.dispatch('base/getUserInfo')
		t.$store.dispatch('home/getDateList')
		t.$store.dispatch('home/getTagList')
	},
	data(){
		return {
			
		}
	},
	computed: {
		...mapGetters('base',{
			'userInfo':'getUserInfo'
		}),
		...mapGetters('home',{
			dateList:'getDateList',
			tagList:'getTagList',
			filterContent:'getFilterContent',
			totalCount:'getTotalCount'
		})
	},
	methods:{
		handleClickTag(item){
			this.updateFilterContent('tags','add',item)
		},
		//关键字搜索
		handleSeach(newVal,oldVal){
			if(newVal == oldVal){
				return;
			}
			this.updateFilterContent('keywords','update',newVal)
		},
		//日期筛选
		handleCollapseHead(dataKey){
			this.updateFilterContent('publishTime','update',dataKey)
		},
		//日起归档下的文章项事件,去文章详情页
		handleArticleItem(id){
			console.log(id)
		},
		//删除标签
		handleCloseTag(tag){
			console.log(tag)
			this.updateFilterContent('tags','delete',tag)
		},
		//更新store filterContent数据
		updateFilterContent(key,type,value){
			this.$store.dispatch('home/updateFilterContent',{
				key,
				type,
				value
			})
		},
		//清空所有筛选
		handleClearFilter(){
			this.$store.dispatch('home/clearFilter')
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
		'date-category-component':dateCategoryComponent,
		'filter-result':filterResult
	},
	deactivated(){
		this.$destroy(); //默认不做先不做keep-alive
	}
}
</script>


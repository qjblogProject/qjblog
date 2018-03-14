import Index from '../components/index'
import ArticleEdit from '../components/articleEdit'

var metaData = {
    title:'个人中心'
}

export default [
    {
        path: '/personal',
        component:Index,
        meta: metaData           
    },
    {
        path: '/edit',
        component:ArticleEdit,
        meta: metaData           
    },
    {
        path:'/set',
        component:Index,
        meta:metaData
    }
];

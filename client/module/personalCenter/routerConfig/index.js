import Index from '../components/index'
import ArticelEdit from '../components/articelEdit'

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
        component:ArticelEdit,
        meta: metaData           
    },
    {
        path:'/set',
        component:Index,
        meta:metaData
    }
];

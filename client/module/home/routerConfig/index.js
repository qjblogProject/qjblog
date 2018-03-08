import Home from '../components/Index'

var metaData = {
    title:'首页'
}

export default [
    {
        path: '/',
        redirect:'/home',
        meta: metaData        
    },
    {
        path: '/home',
        component: Home,
        meta: metaData           
    },
];

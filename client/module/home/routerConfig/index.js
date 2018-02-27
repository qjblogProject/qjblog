import Home from '../components/Index'

var metaData = {
    title:'首页'
}

export default [
    {
        path: '/',
        redirect:'/home/index',
        meta: metaData           
    },
    {
        path: '/home/index',
        component: Home,
        meta: metaData           
    },
];

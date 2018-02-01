import Home from '../components/Home'

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

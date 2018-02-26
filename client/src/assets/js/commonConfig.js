
import axios from 'axios';
import qs from 'qs';

export default (store,router,callBack) => {

    // axios request 拦截器
    axios.interceptors.request.use((config) => {
        // 开发阶段拦截请求 改变content type 并且发序列化参数 配合后端使用
        config.headers['Accept'] = '*/*';
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

        if (!config.data) {
            config.data = {};
        }
        //这里的qs只对config.data的直属key做处理，对于深层次嵌套的数据需要传config.data={data:JSON.stringify(objData)}
        config.data = qs.stringify(config.data)
        return config;
    });

    // axios response拦截器
    axios.interceptors.response.use((res) => {

        return Promise.resolve(res);
    }, (error) => {
        
        return Promise.reject(error);
    });

    router.beforeEach(async (to, from, next) => {
        //设置页面的title
        document.title = to.matched[0].meta.title || '';
        next();
    });
}

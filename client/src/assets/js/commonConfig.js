
import axios from 'axios';
import qs from 'qs';
import {setLastAPITime} from 'assets/js/commonFunc';

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
        setLastAPITime();
        // 登录状态
        if (res.data.status == false && res.data.code == 4001) {
            // 无登录状态, from 方便登录后 回到当前页面
            window.location.href = 'login';
            return;
        }
        
        return Promise.resolve(res);
    }, (error) => {
        
        return Promise.reject(error);
    });

    router.beforeEach(async (to, from, next) => {
        //设置页面的title
        document.title = to.matched[0].meta.title || '';
        store.dispatch('base/setWinHeight');
        next();
    });
}

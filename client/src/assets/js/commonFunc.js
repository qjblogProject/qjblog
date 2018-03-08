
/**
 * setCookie
 * @param {string} name 
 * @param {string} value 
 * @param {Date} expires 
 */
export const setCookie = (name, value, expires) => {
    document.cookie = name + "="+ escape (value) + ";expires=" + expires.toGMTString() + ';path=/';
}

// 设置 接口最后回调时间 cookie 
export const setLastAPITime = () => {
    let date = new Date(),
        expireTime = 30, // minutes
        expireDate = new Date(date.getTime() + (30 * 60 * 1000));
    setCookie('lastAPITime', date.getTime(), expireDate)
}
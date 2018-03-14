import Vue from 'vue'

export const getArticleEditDetail = ({commit},data)=>{
    return Vue.$http({
        url:'/article/ajax-get-article-edit-detail',
        method:'post',
        data:data
    }).then((res)=>{
        return res.data;
    })
}
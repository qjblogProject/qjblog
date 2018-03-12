<template>
    <div class='top clearfix'>
        <div class='user-msg clearfix'>
            <span class='head fl'>鲁</span>
            <div class='fl'>
                <p class='text user-name'>鲁建洋</p>
                <p class='text user-email'>1234567@qq.com</p>
            </div>
            <ul class='operation clearfix'>
                <li class='fl edit' @click='handleToEdit'>
                    <i class='icon icon-edit'></i>
                    <span>写文章</span>
                </li>
                <router-link to='set' tag='li' class='fl set'>
                    <i class='icon icon-set'></i>
                    <span>设置</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {}
    },
    methods:{
        ...mapMutations('article',{
            setArticleData:'setArticleData'
        }),
        handleToEdit(){
            let t = this;
            //存储当前文章信息到store
            t.setArticleData({
                articleId:'',
                draftId:''
            })
            t.$router.push('edit')
        }
    }
}
</script>


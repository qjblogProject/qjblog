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
<style lang="scss">
  .top{
      background: url('../../../../src/assets/img/bg.jpg') no-repeat left top;
      background-size:100% auto;
  }
  .user-msg{
      margin-top: 90px;
      border-top: #d6d6d6 solid 1px;
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
      background: rgba(255,255,255,1);
      .head{
          margin: -40px 15px 0px 30px;
          width: 100px;
          height: 100px;
          text-align: center;
          line-height: 100px;
          font-size: 56px;
          background: #eee;
          border: #fff solid 4px;
          border-radius: 75px;
      }
      .text{
          padding-top: 5px;
          line-height: 24px;
          &.user-name{
              font-size: 16px;
          }
          &.user-email{
              font-size: 12px;
              color:#ddd;
          }

      }
  }
</style>


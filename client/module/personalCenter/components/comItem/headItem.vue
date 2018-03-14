<template>
    <div class='top clearfix'>
        <div class='user-msg clearfix'>
            <span class='head fl'>鲁</span>
            <div class='fl'>
                <p class='text user-name'>鲁建洋</p>
                <p class='text user-email'>1234567@qq.com</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {}
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


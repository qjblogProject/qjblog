<template>
    <div class="header-wrap">
        <p class='top-text'>
            <a href="javascript;">欢迎洋洋兔的夏天～</a>
            <a href="javascript;">sign up</a>
            <a href="javascript;">sign in</a>
        </p>
        <p class='blog-title'>薪人薪事博客平台</p>
        <ul class='nav clearfix'>
            <li :class='{active:activeNav=="home"}'>首页</li>
            <li :class='{active:activeNav=="personal"}'>个人主页</li>
            <li :class='{active:activeNav=="about"}'><a href='//www.xinrenxinshi.com' target='_blank'>关于我们</a></li>
        </ul>
    </div>
</template>

<script>
export default {
	data(){
		return {
            activeNav:'home'
        }
    },
    created() {
        let pathArr = window.location.pathname.split('/')
        this.activeNav = pathArr[1] || 'home'
    },
}
</script>

<style lang='scss'>
.header-wrap{
    box-sizing: border-box;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    padding: 0 10%;
    height: 90px;
    border-top: 25px solid #31353e;
    border-bottom: 5px solid #a3bb51;
    background: rgba(247,247,247,1);
    .top-text{
        position: absolute;
        top: -20px;
        right: 5%;
        font-size: 12px;
        line-height: 16px;
        opacity: 0.5;
        a{
            cursor: pointer;
            padding: 0 10px;
            color: #fff;
            border-right:#fff solid 1px;
            &:hover{
                color:#c5ff00;
            }
            &:last-child{
                border:none;
            }
        }
    }
    .blog-title{
        display: inline-block;
        font-size: 26px;
        line-height: 60px;
    }
    .nav{
        display: inline-block;
        float: right;
        li{
            position: relative;
            float: left;
            cursor: pointer;
            padding: 0 20px;
            border-image: -webkit-linear-gradient(#d0d0d0, rgba(255,255,255,0)) 1 1;
            border-left-width: 1px;
            border-left-style: solid;
            line-height: 60px;
            &:last-child{
                border-right-width: 1px;
                border-right-style: solid;
            }
            &.active{
                color:#7d9138;
            }
            &.active:before{
                content:'';
                display: block;
                position: absolute;
                left: 50%;
                top:0;
                margin-left:-6px;
                width: 0;
                border-top: solid 6px #31353e;
                border-left: solid 6px transparent;
                border-right: solid 6px transparent;
            }
        }
    }
}
</style>

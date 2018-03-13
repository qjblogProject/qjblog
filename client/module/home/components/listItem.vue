<template>
    <li class="list-item">
    	<p class='title'>{{itemData.title}}</p>
        <p class='abstract'>{{itemData.abstract && itemData.abstract.length>100 ? itemData.abstract.substr(0,100)+"..." : itemData.abstract}}<span class='read-all'>阅读全文<i class='icon icon-triangle'></i></span></p>
        <div class='msg-line clearfix'>
            <p class='author fl'><span>作者：</span>{{itemData.name}}</p>
            <p class='publish-time fl'><span>发布时间：</span>{{DateFormate(new Date(itemData.publishTime),'yyyy-MM-dd hh:mm')}}</p>
        </div>
    </li>
</template>

<script>
import {DateFormater} from 'assets/js/commonFn'
export default {
    props:['itemData'],
	data(){
		return {}
    },
    methods:{
        DateFormate(date,ymd){
            return DateFormater(date,ymd)
        }
    }
}
</script>

<style lang='scss'>
.article-list{
    .list-item{
        margin-bottom: 10px;
        background: #fff;
        border-radius: 4px;
        padding: 15px 20px;
        &:hover{
            background: #f4f7eb;
            box-shadow: 0 0 4px #ccc;
        }
        .title{
            display: inline-block;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 10px;
            color: #31353e;
            &:hover{
                color:#a3bb51;
            }
        }
        .abstract{
            margin-bottom: 10px;
            .read-all{
                cursor: pointer;
                margin-left: 10px;
                color: #a3bb51;
                &:hover{
                    color:#ccc;
                }
                i{
                    display: inline-block;
                    transform: rotate(-90deg);
                    -webkit-transform: rotate(-90deg);
                }
            }
        }
        .msg-line{
            font-size: 12px;
            p{
                margin-right: 10px;
                span{
                    color:#bbb
                }
            }
        }
    }
}
</style>

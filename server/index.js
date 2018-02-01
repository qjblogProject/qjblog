const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const route = require('./api')
let app = express()

//注册http监听
route(app)

//生成filePath的绝对路径
const resolve = filePath => path.resolve(__dirname,filePath)

//设置http请求解析
app.use(bodyParser.json()) //处理json格式请求数据
app.use(bodyParser.urlencoded({extened:true})) //处理urlencode格式请求数据

//设置端口port，如果process里没有则默认3000
app.set('port',(process.env.port || 3000))





//绑定程序监听端口到置顶主机和端口号
app.listen(app.get('port'),function(){
    console.log('当前程序运行端口：'+app.get('port'))
})
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')
const route = require('./api')
let app = express()

// session 设置
app.use(cookieParser())
app.use(session({
  secret: 'qjblog',
  name:'qjblog',
  cookie:{maxAge:1000*60*120}, //两个小时候失效
  resave: false,
  saveUninitialized: true
}))

//生成filePath的绝对路径
const resolve = filePath => path.resolve(__dirname,filePath)

//设置http请求解析，要放在路由注册之前
app.use(bodyParser.json()); //处理json格式请求数据
app.use(bodyParser.urlencoded({extened:false})); //处理urlencode格式请求数据

//设置端口port，如果process里没有则默认3000
app.set('port',(process.env.port || 3000))


//注册http监听,一定要放在bodyParser之后
route(app)


//绑定程序监听端口到置顶主机和端口号
app.listen(app.get('port'),function(){
    console.log('当前程序运行端口：'+app.get('port'))
})
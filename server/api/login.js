
const express = require('express')
let router = express.Router()
const db = require('../db/dbModule')

router.post('/api/login',(req,res)=>{
    db.login({},(err,result)=>{
        res.send(result)
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const db = require('../db/dbModule')

router.post('/personal-center/ajax-save-articel',(req,res)=>{
    console.log(req)
    db.saveArticel({},(err,requst)=>{
        res.send({status:requst.status,a:'11'})
    })
})

module.exports = router
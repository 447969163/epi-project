const express = require('express')
const pool = require('../pool')
const router = express.Router()
router.get('/user',(req,res)=>{
    let uid = req.query.uid
    pool.query('SELECT * FROM user WHERE uid=?',[uid],(err,result)=>{
        if (err) throw err
        res.send({"code":200,"msg":"请求成功","data":result})
    })
})
module.exports = router
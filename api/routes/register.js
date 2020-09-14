const express = require('express')
const pool = require('../pool')
let router = express.Router()
router.post('/register',(req,res)=>{
    let uname = req.body.uname
    let upwd = req.body.upwd
    let uphone = req.body.uphone
    let uaddress =req.body.uaddress
    pool.query('INSERT INTO user(unick,uname,upwd,uavatar,ugender,uphone,uaddress) VALUES (DEFAULT,?,MD5(?),DEFAULT,DEFAULT,?,?)',[uname,upwd,uphone,uaddress],(err,result)=>{
        if (err) throw err
        res.send({"code":200,"msg":"注册成功"})
    })
})
module.exports = router
const express = require('express')
const pool = require('../pool')
const jwt = require('../jwt')
const md5 = require('md5-node')
const router = express.Router()
router.post('/login',(req,res)=>{
    //获取参数
    let uname = req.body.uname
    let upwd = req.body.upwd
    // 根据用户名查询密码
    pool.query('SELECT * FROM user WHERE uname=?',[uname],(err,result)=>{
        if (err) throw err
        //验证密码，生成并返回token
        if (md5(upwd) == result[0].upwd){
            res.send({"code":200,"msg":"登陆成功","token":new jwt(result).generateToken()})
        }else{
            res.send({"code":403,"msg":"登陆失败"})
        }
    })
})
module.exports = router
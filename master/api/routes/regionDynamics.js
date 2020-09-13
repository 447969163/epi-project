const express = require('express')
const pool = require('../pool')

// 创建社区动态详情列表路由
let router=express.Router()
// 动态详情列表接口
router.get('/dynamics',(req,res)=>{
    let sql="SELECT did,dtext,dimg,dtime FROM dynamic"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({message:"请求成功",code:200,result:result});
    });
});

// 导出表路由
module.exports = router
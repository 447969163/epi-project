const express = require('express')
const pool = require('../pool')
let router = express.Router()

//用户捐赠，二级分类
router.get("/donationDetail",(req,res)=>{
  let dtype=req.query.dtype;
  //将一级分类作为条件，查找二级分类
  let sql="select dname from donation where dtype=?";
  pool.query(sql,[dtype],(err,result)=>{
    if(err) throw err;
    res.send({
      code:"1",
      message:"查找成功",
      result:result
    })
  })
})
module.exports=router;
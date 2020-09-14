const express = require('express')
const pool = require('../pool')
let router = express.Router()

//用户捐赠，查找一级分类(如医用防护，生活用品等)
router.get("/donation",(req,res)=>{
  let sql="select dtype from donation"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    //console.log(result);
    //数组对象去重
    let obj={};
    result=result.reduce((cur,next)=>{
      obj[next.dtype] ? "" : obj[next.dtype] = true && cur.push(next);
      return cur;
      },[])
    //console.log(result);
    res.send({
      code:"1",
      message:"查找成功",
      result:result
    })
  })
})
module.exports=router;
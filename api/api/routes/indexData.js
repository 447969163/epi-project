const express = require("express");
const pool = require("../pool");
const r = express.Router();

// 首页疫情数据的显示
r.get("/indexData",(req,res) => {
  // 根据用户切换的城市显示指定的数据
  let cname = req.query.cname;
  cname = "武汉"
  let sql = "SELECT pname,cname,confirm,suspect,heal,dead FROM region_data WHERE cname=?";
  pool.query(sql,[cname],(err,result) => {
    if(err)  throw err;
    res.send({"code":200,"msg":"请求成功","data":result})
  })
});
// 首页折线图的显示
r.get("/total",(req,res) => {
  // 只获得当天前一个星期的数据
  let sql = "SELECT insert_date,confirm,suspect,heal,dead,input FROM country_data ORDER BY id DESC LIMIT 0,7";
  pool.query(sql,(err,result) => {
    if(err) throw err;
    res.send({"code":200,"msg":"请求成功","data":result})
  })
})
// 首页文章表
r.get("/article",(req,res) => {
  let sql = "SELECT aid,asubject,aimg,aconment,atime,aimport,type FROM article";
  pool.query(sql,(err,result) => {
    if(err) throw err;
    res.send({"code":200,"msg":"请求成功","data":result})
  })
})

module.exports = r;
const express=require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser");
//创建express实例


const pool=mysql.createPool({
  host:"127.0.0.1",
  port:"3306",
  user:"root",
  password:"",
  database:"epi",
  connectionLimit:20
});

const server = express();

server.use(bodyParser.urlencoded({
  extended:false
}))

server.listen(3000,()=>{
  console.log("server is running----")
});

// article表，文章是否置顶
server.get("/import",(req,res)=>{
  let sql="SELECT aconment,asubject,atime from article where aimport=1";
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    //console.log(results);
    res.send({
      code:"1",
      message:"查询成功",
      results:results
    })
  })
});

//用户注册
server.post("/register",(req,res)=>{
  let uname=req.body.uname;
  let passwordupwd=req.body.upwd;
  //判断用户名是否重复
  let sql="SELECT id FROM user WHERE uname=?"
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw  err;
    if(result.length>0){
      res.send({
        message:"用户名已经存在",
        code:"0"
      })
    }else{
      //将用户信息写入数据表
      let sql="INSERT INTO user(uname,upwd) VALUES(?,?)"
      pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({
            message:"注册成功",
            code:"1"
          })
        }
      })
    }
  })
})


//用户登录
server.get("/login",(req,res)=>{
  let uname=req.query.uname;
  let upwd=req.query.upwd;
  let sql="select uname,upwd from user where uname=? and upwd=?"
  pool.query(sql,[uname,upwd],(err,results)=>{
    if(err) throw err;
    if(results.length>0){
      res.send({
        code:"1",
        message:"登录成功"
      })
    }else{
      res.send({
        code:"0",
        message:"用户名或密码错误"
      })
    }
  })
})

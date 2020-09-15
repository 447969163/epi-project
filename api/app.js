//通过express创建服务器
const express = require('express')
let app = express()
app.listen(3030,()=>{
    console.log('服务器已启动')
})

// 引入body-parser组件
const bodyParser = require('body-parser')
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//省份名路由
let regionPnameRouter = require('./routes/regionPname')
app.use('/api',regionPnameRouter)
//城市名路由
let regionCnameRouter = require('./routes/regionCname')
app.use('/api',regionCnameRouter)
// 动态详情列表路由
let dynamicsRouter = require('./routes/regionDynamics');
app.use('/api',dynamicsRouter);
// 首页路由
let indexRouter = require("./routes/indexData");
app.use("/api",indexRouter);
//登录路由
let loginRouter = require('./routes/login')
app.use('/api',loginRouter)
//注册路由
let registerRouter = require('./routes/register')
app.use('/api',registerRouter)

// token验证中间件[待补充整合]
// 引入jwt
const jwt = require('./jwt')
//中间件
app.use((req,res,next)=>{
    // 如果是需要携带token才能访问的路径
    if(req.url.startsWith('/api/user')) {
        // 获取请求头中的token
        let token = req.headers.token
        // 验证【解析】token
        let result = new jwt(token).verifyToken()
        // 验证结果处理
        if (result.name == 'TokenExpiredError') {// 如果返回结果的name属性是TokenExpiredError，则说明token已超时
            res.send({"code":403,"msg":"token超时"})
        } else if (result.name == 'JsonWebTokenError') { // 如果返回结果是JsonWebTokenError，则说明token不对
            res.send({"code":403,"msg":"token错误"})
        } else { // 如果正确解析了数据对象，就继续执行
            next()
        }
    } else {
        next()
    }
})

//个人中心路由
let userRouter = require('./routes/user')
app.use('/api',userRouter)

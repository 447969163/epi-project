//通过express创建服务器
const express = require('express')
let app = express()
app.listen(3030,()=>{
    console.log('服务器已启动')
})
//省份名路由
let regionPnameRouter = require('./routes/regionPname')
app.use('/api',regionPnameRouter)
//城市名路由
let regionCnameRouter = require('./routes/regionCname')
app.use('/api',regionCnameRouter);
// 首页路由
let indexRouter = require("./routes/indexData");
app.use("/api",indexRouter);
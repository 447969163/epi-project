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
app.use('/api',regionCnameRouter)
//用户捐赠一级接口路由
let donation=require('./routes/donation')
app.use("/api",donation);
//用户捐赠的二级接口路由
let donationDetail=require('./routes/donationDetail');
app.use('/api',donationDetail);
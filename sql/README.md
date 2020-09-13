## 数据库初始化说明

+ 导入数据库脚本`epi.sql`
+ 进入`curl`文件夹路径，执行`npm install`，补全包
+ 执行`node app.js`启动服务器，将数据源中的数据插入数据库

### 接口整理

#### 省份名称接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/regionpname|json|GET|/api/regionpname|返回省份名称|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/|/|/|/|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|pname|省份名|
##### JSON返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": {
        "pname": [
            "湖北",
            "广东",
            "香港",
            "浙江",
            "河南",
            "湖南",
            "安徽",
            "黑龙江",
            "上海",
            "江西",
            "北京",
            "新疆",
            "山东",
            "四川",
            "江苏",
            "重庆",
            "福建",
            "台湾",
            "陕西",
            "河北",
            "辽宁",
            "内蒙古",
            "广西",
            "天津",
            "山西",
            "云南",
            "海南",
            "甘肃",
            "吉林",
            "贵州",
            "宁夏",
            "西藏",
            "澳门",
            "青海"
        ]
    }
}
```

#### 城市名称接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/regioncname|json|GET|/api/regioncname|返回城市名称|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|pname|是|string|省份名|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|pname|城市名|
##### 接口返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [
        {
            "cname": "宜昌"
        },
        {
            "cname": "黄石"
        },
        {
            "cname": "黄冈"
        },
        {
            "cname": "荆州"
        },
        {
            "cname": "孝感"
        },
        {
            "cname": "随州"
        },
        {
            "cname": "鄂州"
        },
        {
            "cname": "武汉"
        },
        {
            "cname": "襄阳"
        },
        {
            "cname": "咸宁"
        },
        {
            "cname": "荆门"
        },
        {
            "cname": "潜江"
        },
        {
            "cname": "境外输入人员"
        },
        {
            "cname": "境外输入"
        },
        {
            "cname": "神农架"
        },
        {
            "cname": "恩施州"
        },
        {
            "cname": "仙桃"
        },
        {
            "cname": "天门"
        },
        {
            "cname": "十堰"
        },
        {
            "cname": "未明确地区"
        },
        {
            "cname": "神农架林区"
        },
        {
            "cname": "监狱系统"
        }
    ]
}
```




#### 首页对应城市数据接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/indexData|json|GET|/api/total|返回对应城市的数据|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/cname|/是|/string|/用户选择的城市名|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
##### JSON返回示例
```json
{"code":200,"msg":"请求成功","data":[{"pname":"湖北","cname":"武汉","confirm":50340,"suspect":0,"heal":46471,"dead":3869}]}
```

#### 首页折线图
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/total|json|GET|/api/total|返回当前七天的数据|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/|/|/|/|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
##### JSON返回示例
```json
{"code":200,"msg":"请求成功","data":[{"insert_date":"2020-09-12","confirm":90666,"suspect":0,"heal":85533,"dead":4741,"input":2635},{"insert_date":"2020-09-11","confirm":90643,"suspect":0,"heal":85505,"dead":4740,"input":2625},{"insert_date":"2020-09-10","confirm":90623,"suspect":0,"heal":85480,"dead":4740,"input":2619},{"insert_date":"2020-09-09","confirm":90595,"suspect":0,"heal":85436,"dead":4740,"input":2604},{"insert_date":"2020-09-08","confirm":90582,"suspect":0,"heal":85411,"dead":4740,"input":2597},{"insert_date":"2020-09-07","confirm":90573,"suspect":0,"heal":85380,"dead":4739,"input":2595},{"insert_date":"2020-09-05","confirm":90517,"suspect":0,"heal":85314,"dead":4735,"input":2573}]}
```
#### 首页文章数据接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/article|json|GET|/api/article|返回文章表|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/|/|/|/|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
##### JSON返回示例
```json
{"code":200,"msg":"请求成功","data":[{"aid":1,"asubject":"疫情防护——居家防护篇","aimg":"img/poster/1.jpg","aconment":"<p><span>1.体温计、口罩和消毒用品等防疫用品。<br>2.主动做好家庭成员的健康监测,建议早晚测量体温。<br>3.开窗通风,增加室内空气流通,每天2-3次,每次20-30分钟。<br>4.家庭环境以清洁为主,预防性消毒为辅。<br>5.家庭成员不共用毛巾,勤晒衣被;注意个人卫生习惯不随地吐痰,打喷嚏时用纸巾遮住口鼻或采用肘臂遮挡等。<br>6.加强营养,科学饮食,适量运动,保障睡眠,提高身体免疫力。<br>7.从室外返回、咳嗽手捂后、饭前便后应使用洗手液(或肥皂)流水洗手,或用速干手消毒剂揉搓双手。<br>8.不接触、购买和食用野生动物,禽肉蛋要充分煮熟后食用。<br>9.不串门、不聚众、不聚餐、不相互请吃。<br>10.生病时尽量减少外出,不去人员密集场所,外出时佩戴口罩。<br>11.前往人员密集的公共场所,乘坐公共交通工具或与其他人近距离接触时佩戴口罩。<br>12.中、高风险地区,尽量减少不必要的外出;与居家隔离人员共同生活时,应做好清洁消毒,加强个人防护,佩戴口罩。</span><br><img src=\"https://mmbiz.qpic.cn/mmbiz_jpg/XYkSH2e1UbapUqiayJrsGlibMibYA3QKopbs0S5ZnpO2DNNhcicTu9VONjTF8FRias1HvgIZZysjI4tTegOgTf5R8kQ/640?wx_fmt=jpeg\"></p>","atime":21321321321231,"aimport":"1","type":"文章"},{"aid":2,"asubject":"生命的防线mv","aimg":"img/poster/2.jpg","aconment":"video/1.mp4","atime":1223343122312,"aimport":"0","type":"视频"}]}
```
### 文章内页接口,可直接使用/api/article

### 数据库设计及说明

-- user表：存放用户信息

|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|uid|用户id|int|primary key,auto_increment|
|unick|用户昵称|varchar()|not null,default|
|uname|用户登录名|varchar()|not null,unique|
|upwd|用户密码|varchar()|not null|
|uavatar|用户头像|varchar()|not null,default|
|ugender|用户性别|enum|default|
|uphone|用户电话号码|int(11)||
|uaddress|用户地址|varchar()||

-- article表：存放防护知识文章信息，疫苗研制最新情况

|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|aid|文章/视频id|int|primary key,auto_increment|
|asubject|文章/视频标题|varchar()|not null|
|aimg|文章/视频封面图|varchar()|not null|
|acontent|文章内容/视频路径|varchar()|not null|
|atime|发布时间|bigint|not null|
|aimport|是否置顶|enum|not null,default|
|type|类型|enum|not null|

-- dynamic表：用户上传动态表

|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|did|动态id|INT|primary key auto_increment|
|dtext|用户动态文本|varchar|not null|
|dimg|用户动态图片路径|varchar||
|dtime|发布时间|bigint|not null|
|uid|用户id|int|not null,foreign key reference|

-- islike表：用户点赞数据

|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|did|动态id|INT|not null,foreign key reference|
|uid|用户id|INT|not null,foreign key reference|

-- donation表：记录捐献数据
|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|did|捐赠物资id|int|primary key,auto_increment|
|dtype|捐赠类型|enum|not null,defalut|
|dname|捐赠物品|enum|not null|
|dcount|捐赠数量|int|not null|
|dcompany|捐赠单位|varchar()|not null|
|dtime|捐赠时间|bigint|not null|
|dstate|捐赠状态|enum|not null,default|
|uid|用户id|int|not null,foreign key reference|

*region_data表：记录区域数据*
|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|pname|省份名称|varchar|not null,unique|
|cname|城市名称|varchar|not null|
|confirm|确诊人数|int|not null|
|suspect|疑似人数|int|not null|
|heal|治愈人数|int|not null|
|dead|死亡人数|int|not null|

*country_data表：记录每个日期全国数据*
|表字段|备注|列类型|列约束|
|:---|:---|:---|:---|
|insert_date|数据插入日期|varchar|not null|
|confirm|确诊人数|int|not null|
|suspect|疑似人数|int|not null|
|heal|治愈人数|int|not null|
|dead|死亡人数|int|not null|
|input|境外输入人数|int|not null|
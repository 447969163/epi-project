#### 初始化
+ 执行`npm install -S`补全需要的包
+ 在浏览器地址栏输入`http://localhost:3030/接口地址`访问接口

### 接口整理

#### 省份名称接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/regionpname|json|GET|http://localhost:3030/api/regionpname|返回省份名称|
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
|/api/regioncname|json|GET|http://localhost:3030/api/regioncname|返回城市名称|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|pname|是|string|省份名|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|cname|string|城市名
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
#### 动态列表接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/dynamics|json|GET|/api/dynamics|返回所有动态列表|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|did|是|int|动态编号|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|message|string|返回码描述|
|code|int|状态码|
|did|动态id|
|dtext|动态图片|
|dtime|动态发表时间|
##### 接口返回示例
```json
{
    "message": "请求成功",
    "code": 200,
    "data": [
        {
            "did":1,
            "dtext":"今日疫情打卡",
            "dimg":"../jpg",
            "dtime":1673277328289
        }
    ]
}
```
#### 注册接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/register|json|POST|http://localhost:3030/api/register|注册接口|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|uname|是|string|用户名|
|upwd|是|string|用户密码|
|uphone|否|number|用户电话|
|uaddress|否|string|用户住址|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
##### 接口返回示例
```json
{
    "code": 200,
    "msg": "注册成功"
}
```
#### 登录接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/login|json|POST|http://localhost:3030/api/login|登录接口|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|uname|是|string|用户名|
|upwd|是|string|用户密码|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|token|string|用户token|
##### 接口返回示例
```json
{
    "code":200,
    "msg": "登录成功",
    "token": "sajheuhduieabcnauiw6d78yqeye73983u89u3y78wt78dg8q"
}
```
#### 个人中心接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/user|json|POST|http://localhost:3030/api/user|个人中心接口|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|uid|是|number|用户id|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|data|json|用户信息|
##### 接口返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [{
        "uid": 2,
        "unick": "注册用户",
        "uname": "ceshi1",
        "upwd": "ceshi1",
        "uavatar": "img/avatar/1.jpg",
        "ugender": "未知",
        "uphone": null,
        "uaddress": null
    }]
}
```
#### 首页对应城市数据接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/indexData|json|GET|http://localhost:3030/api/indexData|返回对应城市的数据|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|cname|是|/string|用户选择的城市名|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|pname|string|当前用户选择的省份|
|cname|string|当前用户选择的城市|
|confirm|int|当前城市的确诊人数|
|suspect|int|当前城市的疑似病例|
|heal|int|当前城市的治愈人数|
|dead|int|当前城市的死亡人数|
##### JSON返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [
        {
            "pname": "湖北",
            "cname": "武汉",
            "confirm": 50340,
            "suspect": 0,
            "heal": 46471,
            "dead": 3869
        }
    ]
}
```

#### 首页折线图
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/total|json|GET|http://localhost:3030/api/total|返回当前七天的数据|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/|/|/|/|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|insert_date|string|当前数据的更新时间|
|confirm|int|当天全国确诊人数|
|suspect|int|当天全国疑似病例|
|heal|int|当天全国治愈人数|
|dead|int|当天全国死亡人数|
|input|int|当天境外输入人数|
##### JSON返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [
        {
            "insert_date": "2020-09-12",
            "confirm": 90666,
            "suspect": 0,
            "heal": 85533,
            "dead": 4741,
            "input": 2635
        },
        {
            "insert_date": "2020-09-11",
            "confirm": 90643,
            "suspect": 0,
            "heal": 85505,
            "dead": 4740,
            "input": 2625
        },
        {
            "insert_date": "2020-09-10",
            "confirm": 90623,
            "suspect": 0,
            "heal": 85480,
            "dead": 4740,
            "input": 2619
        },
        {
            "insert_date": "2020-09-09",
            "confirm": 90595,
            "suspect": 0,
            "heal": 85436,
            "dead": 4740,
            "input": 2604
        },
        {
            "insert_date": "2020-09-08",
            "confirm": 90582,
            "suspect": 0,
            "heal": 85411,
            "dead": 4740,
            "input": 2597
        },
        {
            "insert_date": "2020-09-07",
            "confirm": 90573,
            "suspect": 0,
            "heal": 85380,
            "dead": 4739,
            "input": 2595
        },
        {
            "insert_date": "2020-09-05",
            "confirm": 90517,
            "suspect": 0,
            "heal": 85314,
            "dead": 4735,
            "input": 2573
        }
    ]
}
```
#### 首页文章数据接口
|接口地址|返回方式|请求方式|请求示例|接口备注|
|:---|:---|:---|:---|:---|
|/api/article|json|GET|http://localhost:3030/api/article|返回文章表|
##### 请求参数说明
|名称|必填|类型|说明|
|:---|:---|:---|:---|
|/|/|/|/|
##### 返回参数说明
|名称|类型|说明|
|:---|:---|:---|
|code|int|状态码|
|msg|string|返回码描述|
|aid|int|当前文章id|
|asubject|string|当前文章标题|
|aimg|string|当前文章封面图片|
|aconment|string|当前文章详情|
|atime|int|当前文章发布时间|
|aimport|string|当前文章是否置顶|
|type|string|当前文章类型|
##### JSON返回示例
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [
        {
            "aid": 1,
            "asubject": "疫情防护——居家防护篇",
            "aimg": "img/poster/1.jpg",
            "aconment": "<p><span>1.体温计、口罩和消毒用品等防疫用品。<br>2.主动做好家庭成员的健康监测,建议早晚测量体温。<br>3.开窗通风,增加室内空气流通,每天2-3次,每次20-30分钟。<br>4.家庭环境以清洁为主,预防性消毒为辅。<br>5.家庭成员不共用毛巾,勤晒衣被;注意个人卫生习惯不随地吐痰,打喷嚏时用纸巾遮住口鼻或采用肘臂遮挡等。<br>6.加强营养,科学饮食,适量运动,保障睡眠,提高身体免疫力。<br>7.从室外返回、咳嗽手捂后、饭前便后应使用洗手液(或肥皂)流水洗手,或用速干手消毒剂揉搓双手。<br>8.不接触、购买和食用野生动物,禽肉蛋要充分煮熟后食用。<br>9.不串门、不聚众、不聚餐、不相互请吃。<br>10.生病时尽量减少外出,不去人员密集场所,外出时佩戴口罩。<br>11.前往人员密集的公共场所,乘坐公共交通工具或与其他人近距离接触时佩戴口罩。<br>12.中、高风险地区,尽量减少不必要的外出;与居家隔离人员共同生活时,应做好清洁消毒,加强个人防护,佩戴口罩。</span><br><img src=\"https://mmbiz.qpic.cn/mmbiz_jpg/XYkSH2e1UbapUqiayJrsGlibMibYA3QKopbs0S5ZnpO2DNNhcicTu9VONjTF8FRias1HvgIZZysjI4tTegOgTf5R8kQ/640?wx_fmt=jpeg\"></p>",
            "atime": 21321321321231,
            "aimport": "1",
            "type": "文章"
        },
        {
            "aid": 2,
            "asubject": "生命的防线mv",
            "aimg": "img/poster/2.jpg",
            "aconment": "video/1.mp4",
            "atime": 1223343122312,
            "aimport": "0",
            "type": "视频"
        }
    ]
}
```
### 文章内页接口,可直接使用/api/article

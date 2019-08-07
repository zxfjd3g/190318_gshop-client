# day01
## 1. 项目开发准备
    项目描述
    技术选型
    API接口

## 2. 开启项目开发
    使用脚手架创建项目: vue-cli3
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与运行

## 3. 搭建项目整体界面结构
    1). 项目路由拆分
        确定路由组件显示的区域
        确定路由是几级路由
    2). App组件组成
        底部导航组件: FootGuide
        导航路由组件: MSite/Search/Order/Profile
    3). vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能方法, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    4). FootGuide: 底部导航组件
        动态class
        编程式路由导航

## 4. 拆分组件
    1). 导航路由组件
        MSite
        Search
        Order
        Profile
    2). 抽取头部组件
        Header
        通过props向子组件传递数据
        通过slot向子组件传递标签
    3). 抽取商家列表组件
        ShopList
    4). 登陆/注册路由组件
        Login
        FooterGuide的显示/隐藏: 通过路由的meta标识

## 5. 启动后台应用并测试
    运行后台项目(启动mongodb服务),
    使用postman测试后台接口, 如果不一致, 与后台工程师对接 / 修改接口文档

## 6. 封装ajax:
### 1). 封装axios: 发ajax请求的函数
    a. 利用请求拦截器, 对所有post请求的请求参数转换为urlencode格式字符串: name=xxx&pwd=yyy
    b. 利用响应拦截器, 让请求成功接收到的数据不是response, 而是response.data
    c. 利用响应拦截器, 对请求异常进行统一的处理, 具体的请求不需要单独再做请求异常处理

### 2). 封装接口请求函数
    根据接口文档定义

### 3). 解决ajax的跨越域问题
    配置代理: vue.config.js ==> webpack-dev-server ==> http-proxy-middleware ==> 配置
    对代理的理解: 对前台应用发出的特定请求进行转发操作
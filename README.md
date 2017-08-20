## 前言
> vue2.0自发布以来发展如火如荼，整个生态系统已经非常完善，与react各有千秋。本项目
借助vue的整个技术栈完成一个轻量级的移动OA平台，工作之余为Progressive Web Application的新时代做准备。

## 技术栈
vue2 + vue-rotuer2 + vuex2 + webpack + ES6 + fetch + scss + flex + awesome + localStorage
## 目标功能
- [x] 项目管理
- [ ] 移动门户
- [ ] 移动审批
- [ ] 移动文档
- [ ] 移动考勤
- [ ] 移动通讯录
- [ ] 移动日程
- [ ] 移动新闻
- [ ] 移动公文
- [ ] 移动邮件
- [ ] 微信办公
- [ ] 移动协作区
- [ ] 工作微博
- [ ] 企业微信
- [ ] 任务管理
- [ ] 客户服务
- [ ] 车辆管理
- [ ] 资产管理
- [ ] 供应商门户
- [ ] 经销商门户

## 项目目录说明
```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- myOA                           	 // 上线项目文件，放在服务器即可正常访问
|
|-- src                              // 源码目录
|   |-- assets                       // 资源
|       |-- css                      // css文件
|       |-- fonts                    // 字体图标
|       |-- scss                     // scss模块
|
|   |-- components                   // 组件
|       |-- common                   // 公共组件
|			|-- echarts           
|			|-- fhlable         
|			|-- grid             
|			|-- icheckbox       
|			|-- gps          
|			|-- iphoto          
|			|-- iselect          
|			|-- itext          
|			|-- itextarea          
|			|-- list          
|			|-- search          
|			|-- tabBar          
|			|-- title          
|			|-- todolist          
|			|-- tree          
|			|-- vuechat          
|
|       |-- header                 	 // 头部公共组件
|
|   |-- mockData                       // 模拟数据
|   
|   |-- pages                       // 业务页面
|       |-- daily                 	//日志组件
|       |-- home                 	 // 主页组件
|       |-- message                 	 // 消息组件
|       |-- project                 	 // 项目头件
|
|   |-- router                       // 路由
|       |-- index.js                   // 路由配置
|
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- fetch.js                 // 获取数据
|       |-- mUtils.js                // 常用的js方法
|       |-- rem.js                   // px转换rem
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|       |-- mutations.js             // 配置mutations
|       |-- store.js                 // 本地存储
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```
## 项目运行
```
进入文件夹
cd oa
安装依赖
npm install
```
### 编译环境
```
开启本地服务器
npm run dev
访问 http://localhost:8080/
```
### 线上版本
```
npm run build
生成的elm文件夹放在服务器即可正常访问
```



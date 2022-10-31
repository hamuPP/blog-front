# 我个人的一个前端学习项目

| 本工程的内容比较杂,主要包括各种第三方库使用方法、知识点等等。
  尽量会在首页列出一个清单导航

项目框架：vue2 + @vue/cli4 + vue-router + axios0.21.1 

## 运行
本地开发： ``npm run serve``
打包：``npm run build``

## Browsers support
该工程的基础架构是兼容ie9+。但如果引用的第三方库不支持ie9的话，则会导致整个项目不兼容ie9+

ie9: vue-router的history模式无效，会变成#的样子
ie10+yshang

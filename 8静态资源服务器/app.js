/**
 * Created by hama on 2017/5/3.
 */
const Koa = require('koa')
const path = require('path');
const convert = require('koa-convert');
const static = require('koa-static');
const app = new Koa();
//静态资源目录相对于入口文件index.js的路径
const staticPath = './static';
//由于koa-static目前不支持koa2,所以，只能用koa-conver封装一下
app.use(convert(static(
    path.join(__dirname,staticPath)
)))
app.use(async(ctx)=>{
    ctx.body = 'hello world';
})
app.listen(3000)
console.log('[demo] request post is starting at port 3000')
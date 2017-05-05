/**
 * Created by hama on 2017/5/3.
 */
const koa = require('koa');
const fs = require('fs');
const app = new koa();
const Router = require('koa-router');

//创建子路由home和page
let home = new Router();
let page = new Router();
//下面是定义
home.get('/',async(ctx)=>{
    let html = `
        <ul>
            <li><a href="/page/helloworld">/page/helloworld</a></li>
            <li><a href="/page/404">/page/404</a></li>    
        </ul>
    `
    ctx.body = html;
})
page.get('/404',async(ctx)=>{
    ctx.body = '404 page!';
}).get('/helloword',async(ctx)=>{
    ctx.body = 'helloworld page!';
})
//装载所有的子路由
let router = new Router();
router.use('/',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//加载路由的中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000);
console.log('[demo] route-use-middleware is starting at port 3000')
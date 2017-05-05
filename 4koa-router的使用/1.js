/**
 * Created by hama on 2017/5/3.
 */
const koa = require('koa');
const app = new koa()
//新建了一个路由
const router = require('koa-router')();
//设置这个路由的规则
router.get('/',async(ctx)=>{
    ctx.body = '欢迎您访问首页';
}).get('/user',async(ctx)=>{
    ctx.body = '欢迎进入用户页面';
}).post('/user',async(ctx)=>{
    //...
}).put('/user',async(ctx)=>{
    //...
}).del('/user',async(ctx)=>{
    //...
}).get('user','/users:id',async(ctx)=>{
    //路由可以有名字
    //可以使用router.url('user',3)来进行匹配
})
//应用这个路由规则
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)
console.log('koa is OK');

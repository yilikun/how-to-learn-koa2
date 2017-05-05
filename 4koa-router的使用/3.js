/**
 * Created by hama on 2017/5/3.
 */
/**
 * Created by hama on 2017/5/3.
 */
const koa = require('koa');
const app = new koa()
//新建了一个路由
const router = require('koa-router')();
//设置这个路由的规则
router.get(/^\/(.*)(?:\/|$)/, function(){}); // match all path, e.g., /hello, /hello/world
router.get(/^\/app(?:\/|$)/,function(){}); // match all path that start with "/app", e.g., /app/hello, /app/hello/world
router.get('/:category/:title', function *(next) {
    console.log(this.params);
    // => { category: 'programming', title: 'how-to-node' }
});


//应用这个路由规则
//router.routes返回的是一个处理请求的中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)
console.log('koa is OK');

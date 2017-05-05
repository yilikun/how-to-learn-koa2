/**
 * Created by hama on 2017/5/3.
 */
/**
 * Created by hama on 2017/5/3.
 */
const koa = require('koa');
const app = new koa()
const Router = require('koa-router');
//新建两个路由，路由可以嵌套
var forums = new Router();
var posts = new Router();
posts.get('/',async(next)=>{})
posts.get('/:pid',async(next)=>{})
forums.use('/forums/:fid/posts',posts.routes(),posts.allowedMethods());

//应用
app.use(forums.routes());
app.listen(3000)
console.log('koa is OK');

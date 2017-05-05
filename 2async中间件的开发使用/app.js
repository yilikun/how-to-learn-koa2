/**
 * Created by hama on 2017/5/3.
 */
const Koa = require('koa');
const loggerAsync = require('./middleware/logger-async');
const app = new Koa();
app.use(loggerAsync());
app.use((ctx)=>{
    ctx.body = 'hello world';
})
app.listen(3000);
console.log('the server is starting at port 3000');
/**
 * Created by hama on 2017/5/3.
 */
const koa = require('koa');
const fs = require('fs');
const app = new koa();
//使用promise封装异步读取文件方法
function render(page){
    return new Promise((resolve,reject)=>{
        let ViewUrl = `./view/${page}`;
        fs.readFile(ViewUrl,'binary',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
//根据url获取HTML的内容
async function route(url){
    let view = '404.html';
    switch(url){
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/404':
            view = '404.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        default:
            break
    }
    let html = await render(view);
    return html;
}
app.use( async (ctx)=>{
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})
app.listen(3000)
console.log('[demo] route-simple is starting at port 3000')

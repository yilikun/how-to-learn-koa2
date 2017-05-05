/**
 * Created by hama on 2017/5/3.
 */
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}
module.exports = function () {
    return function ( ctx, next ) {
        return new Promise( ( resolve, reject ) => {
            // 执行中间件的操作
            log( ctx )
            resolve()
            return next()
        }).catch(( err ) => {
            return next()
        })
    }
}
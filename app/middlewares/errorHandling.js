/**
 * @fileOverview 错误异常处理
 * https://github.com/koajs/koa/wiki/Error-Handling
 */

process.on('unhandledRejection', err => {
    const errorMessage = err && err.stack;
    console.log('errMes: ', errorMessage);
    // 这里可以接入一些日志记录的接口
});

module.exports = function() {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;

            console.log(
                `status: ${ctx.status}`,
                `url: ${ctx.href || ctx.url}`,
                `errMsg: ${err}`
            );
            // 这里也可以记录一些日志

            ctx.app.emit('error', err, ctx);
        }
    }
}

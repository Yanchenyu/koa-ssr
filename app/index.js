const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const basicService = require('./basicService');
const errorHandling = require('./middlewares/errorHandling');

const startWebServer = async () => {
    const start = +new Date();
    const app = new Koa();

    // 初始化一些服务
    await basicService.init();

    // 中间件部分

    // 错误处理一定要写第一个
    app.use(errorHandling());
    app.use(bodyParser());

    app.use(async ctx => {
        ctx.body = 'Hello world'
    });

    app.listen(3000);

    console.log(`[app] init success! app listen port 3000, set up timeout ${+new Date() - start}ms`);
};

startWebServer();
import Koa from 'koa';
import path from 'path';
import {basicService} from './basic';
import {middleWare} from './middlewares';
import {template} from './template';
import {route} from './routes';

const port = require('../package.json').config.port || 9999;
const startWebServer = async () => {
    const start = +new Date();
    const app = new Koa();
    await basicService.init();  // 初始化一些服务
    middleWare.init(app);       // 中间件部分
    template.init(app);         // 模板引擎
    route.init(app);            // 路由
    app.listen(port);
    console.log(`[app] init success! app listen port ${port}, set up timeout ${+new Date() - start}ms`);
};

startWebServer();
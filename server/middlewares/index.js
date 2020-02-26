import bodyParser from 'koa-bodyparser';
import errorHandling from './errorHandling';

class MiddleWare {
    constructor() {
        this.instance;
    }
    static getInstance() {
        if (!MiddleWare.instance) {
            MiddleWare.instance = new MiddleWare();
        }
        return MiddleWare.instance;
    }
    init(app) {
        app.use(errorHandling());   // 错误处理一定要写第一个
        app.use(bodyParser());
    }
}

export const middleWare = MiddleWare.getInstance();

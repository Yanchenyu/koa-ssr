import Router from 'koa-router';
import page from './page';

class Route {
    constructor() {
        this.instance;
    }
    static getInstance() {
        if (!Route.instance) {
            Route.instance = new Route();
        }
        return Route.instance;
    }
    init(app) {
        const router = new Router();
        router.use('/m', page.routes(), page.allowedMethods());
        app.use(router.routes()).use(router.allowedMethods());
    }
}

export const route = Route.getInstance();

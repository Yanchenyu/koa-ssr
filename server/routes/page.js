import React from 'react';
import {renderToString} from 'react-dom/server';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
// import page from '../controllers/page';
import App from '../../src/pages';

const router = new Router();

// router.get('/home', page.home);
// router.get('/list', page.list);

router.get('*', async (ctx) => {
    const data = {
        name: 'SSR',
        num: 12
    };
    const context = {};
    await ctx.render('home', {
        locale: 'zh',
        data,
        page: 'home',
        renderHtml: renderToString(
            <StaticRouter location={ctx.url} context={context}>
                <App />
            </StaticRouter>
        )
    });
})

export default router;

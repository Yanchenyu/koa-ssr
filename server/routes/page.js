import React from 'react';
import {renderToString} from 'react-dom/server';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
// import page from '../controllers/page';

// import App from '../../src/pages';

const App = require('../../dist/server/ssr-index').default;

const router = new Router();

// router.get('/home', page.home);
// router.get('/list', page.list);

router.get('*', async (ctx) => {
    const context = {
        text: 'static context !!',
        data: {
            name: 'SSR',
            num: 12
        }
    };
    await ctx.render('base', {
        locale: 'zh',
        // page: 'home',
        context,
        renderHtml: renderToString(
            <StaticRouter location={ctx.url} context={context}>
                {React.createElement(App)}
            </StaticRouter>
        )
    });
})

export default router;

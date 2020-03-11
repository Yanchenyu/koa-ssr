import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';

const router = new Router();

const nodeStats = path.resolve(__dirname, '../../dist/server/loadable-stats.json');
const webStats = path.resolve(__dirname, '../../dist/client/loadable-stats.json');

router.get('*', async (ctx) => {

    let context = {};
    const arr = ctx.url.split('/page/');
    let location;
    if (arr.length > 1) {
        location = arr[1].split('/')[0];
    }

    const nodeExtractor = new ChunkExtractor({ 
        statsFile: nodeStats,
        entrypoints: ["index", location]
    });
    const { default: App } = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({ 
        statsFile: webStats,
        entrypoints: ["index", location]
    });

    switch (location) {
        case 'home':
            context = {
                name: 'home'
            };
            break;
        case 'list':
            context = {
                name: 'list'
            };
            break;
    }

    const jsx = webExtractor.collectChunks(
        <StaticRouter location={ctx.url} context={context}>
            <App />
        </StaticRouter>
    );

    const resources = {
        scripts: webExtractor.getScriptTags(),
        styles: webExtractor.getStyleTags(),
        links: webExtractor.getLinkTags()
    };

    await ctx.render(location, {
        locale: 'zh',
        context,
        resources,
        renderHtml: renderToString(jsx)
    });
});

export default router;

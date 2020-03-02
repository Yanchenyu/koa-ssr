import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../../src/pages/Home';
import List from '../../src/pages/List';

const home = async (ctx) => {
    const data = {
        name: 'SSR',
        num: 12
    };
    await ctx.render('home', {
        locale: 'zh',
        data,
        page: 'home',
        renderHtml: renderToString(<Home data={data} />)
    });
}

const list = async (ctx) => {
    const data = {};
    await ctx.render('list', {
        data,
        page: 'list',
        renderHtml: renderToString(<List data={data} />)
    })
}

export default {
    home,
    list
}

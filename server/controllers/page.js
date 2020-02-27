import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../src/components/App';

const home = async (ctx) => {
    const data = {
        name: 'SSR',
        num: 12
    };
    await ctx.render('home', {
        locale: 'zh',
        data,
        renderHtml: renderToString(<App data={data} />)
    });
}

export default {
    home
}

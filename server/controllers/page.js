import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../src/components/App';

const home = async (ctx) => {
    await ctx.render('home', {
        locale: 'zh',
        renderHtml: renderToString(<App />)
    });
}

export default {
    home
}

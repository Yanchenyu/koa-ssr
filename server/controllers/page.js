import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../src/components/App';

const home = async (ctx) => {
    await ctx.render('home', {
        locale: 'zh',
        renderHtml: renderToString(<App />)
    });
    // const renderHtml = renderToString(<App />);
    // ctx.body = `
    // <!DOCTYPE html>
    // <html lang="{{locale}}">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <title>Document</title>
    // </head>
    // <body>
    //     this is home page
    //     next is React SSR component
    //     <div id="root">${renderHtml}</div>
    // </body>
    // </html>
    // `;
    
}

export default {
    home
}

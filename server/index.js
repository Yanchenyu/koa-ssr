require('@babel/polyfill');
require('@babel/register')({
    extensions: ['.js', '.jsx'],
    presets: [
        "@babel/preset-env"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ]
});
require('./app.js');

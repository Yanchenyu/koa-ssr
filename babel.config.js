function isWebTarget(caller) {
    return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
    return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = function(api) {
    // api.cache(true);
    const web = api.caller(isWebTarget);
    const webpack = api.caller(isWebpack);
    const presets = [
        [
            '@babel/preset-env',
            {
                'targets': web ? '> 0.25%, not dead' : { node: 'current' }
            }
        ],
        '@babel/preset-react'
    ];
    const plugins = [
        [
            '@babel/plugin-transform-runtime',
            {
                'corejs': 2
            }
        ],
        [
            '@babel/plugin-proposal-class-properties',
            {
                'loose': true
            }
        ],    
        '@babel/plugin-syntax-dynamic-import',
        '@loadable/babel-plugin'
    ];
    return {
        presets,
        plugins
    };
};

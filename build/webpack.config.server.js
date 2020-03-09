const path = require('path');
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const alias = require('./alias');
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

// 入口文件
const entryFileConfig = {
    'ssr-index': 'pages/index'
};

// *输出文件
const outputFileConfig = {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
};

const config = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, '../src'),
    entry: entryFileConfig,
    output: outputFileConfig,
    target: 'node',
    externals: [
        nodeExternals()
    ],
    resolve: {
        alias,
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [
            // 告诉 webpack 解析模块时应该搜索的目录
            path.resolve(__dirname, '../src'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            caller: {
                                target: 'node'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'ignore-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

module.exports = config;

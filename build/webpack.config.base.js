const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const alias = require('./alias');
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

console.log('NODE_ENV: ', process.env.NODE_ENV);

// 入口文件
const entryFileConfig = {
    // 首页
    'home': 'index'
}

// *输出文件
const outputFileConfig = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
};

const config = {
    context: path.resolve(__dirname, '../src'),
    entry: entryFileConfig,
    output: outputFileConfig,
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
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/
                ],
                use: {
                    loader: 'eslint-loader'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: !IS_DEVELOPMENT ? 'babel-loader' : 'babel-loader?cacheDirectory'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|eot|otf|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
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

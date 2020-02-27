const path = require('path');

module.exports = {
    ignore: ['.git', 'node_modules'],
    entry: path.resolve(process.cwd(), 'server/index.js'),
    watch: [path.resolve(process.cwd(), 'server'), path.resolve(process.cwd(), 'src')],
};
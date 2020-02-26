const path = require('path');

module.exports = {
    ignore: ['.git', 'node_modules'],
    entry: path.resolve(process.cwd(), 'index.js'),
    watch: [path.resolve(process.cwd(), 'server')],
};
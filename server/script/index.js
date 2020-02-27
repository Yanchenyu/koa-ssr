require('colors');
const nodemon = require('nodemon');
const path = require('path');
const config = require('./config');
process.env.NODE_ENV = 'development';

let init = false;

const {
    entry,
    ignore,
    watch
} = config;

console.log('*************************'.blue);
console.log(`启动文件:${entry}`.blue);

console.log('*************************'.blue);
console.log(`已添加如下忽略文件:\n${[].concat(ignore).map((item)=>`${item}\n`)}`.blue);

console.log('*************************'.blue);
console.log(`已添加如下观测文件:\n${[].concat(watch).map((item)=>`${item}\n`)}`.blue);


nodemon({
    script: entry,
    ext: 'js',
    delay: '200',
    ignoreRoot: ignore,
    watch,
    ignore: [],
});


//start nodemon as deamon
nodemon.on('start', function() {
    if (!init) {
        console.log('nodemon: App has started'.yellow);
        init = true;
        process.env.GLOBAL_INIT = '1';
    }
}).on('quit', function() {
    console.log('nodemon: App has quit'.yellow);
    process.exit();
}).on('restart', function() {
    console.log('nodemon: App restarted'.yellow);
});
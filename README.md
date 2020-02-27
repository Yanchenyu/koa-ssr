# koa-ssr
本项目主要技术栈为React + Koa 2来实现同构SSR
服务端模板是nunjucks
打包工具是Webpack 4

## 安装项目

npm i

## 配置nginx
```
server {
                listen 8866;
                server_name www.dev.ssr.com;
                location /page/home {
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header Host $http_host;
                    proxy_pass http://127.0.0.1:9999;
                }

                location /page/static {
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header Host $http_host;
                    proxy_pass http://127.0.0.1:6688;
                }
       }
```

## 配置hosts

```
# DEV FOR SSR
127.0.0.1 www.dev.ssr.com     
```

## 启动项目

客户端：
npm run dev

服务端：
npm run start

## 打开页面
http://www.dev.ssr.com:8866/page/home



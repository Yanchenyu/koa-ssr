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

## 新手帮助
* Q: 同一个组件，服务端与客户端如何共享状态？
> A: 都可以通过props将数据传入，区别是服务端是直接传入，然后将数据传到模板里，在script中添加到window对象里，当加载客户端代码时，再将window下该属性初始化赋值到组件中去

* Q: 同一个组件，服务端与客户端需要区分props和state吗？
> A: 不需要，先说props，对于组件来说，props都是传入的，可以直接获取，服务端和客户端的区别在于组件外的props是怎么传入的，服务端可以在node层获取数据后直接传入，而客户端是服务端获取的数据挂载到window对象上，然后在组件初始化的时候访问这个window对象上的属性，再传入组件，但是对于组件内部来说，用法都是一样的，不在意外面怎么传入的；而state，一般修改state都是通过事件去setState，或者在didmount这种生命周期里请求数据再去修改，而对于服务端来说，事件绑定和didMount都是无法执行到的，基本都是初始化render的时候拿到的那些state，所以就和在客户端第一次render包括之前的效果一样，因此不用区分客户端还是服务端的state，如果在render前的某些生命周期中用了setState，那这个本身就是不符合规范的设计，需要改掉。

* Q: 如何减小打出包的大小？
> A: 借助webpack code spliting

* Q: 现在所有的组件都挂在在一个App下，那如何避免打包到一起？
> A: 目前的解决方案是借助React官方推荐的load-component，链接如下：

* Q: 如何实现真正意义上的同构？不光是组件同构，包括路由，状态管理？
> A: 路由同构，react-router 5的StaticRouter和BrowserRouter实现路由同构

* Q: 如何实现模板、路由、页面的自动化绑定？
> A: 

* Q: 如何实现SSR + SPA？资源打包这块怎么处理？
> A: react-router实现SPA

* Q: 如何请求同构？如果当前是服务端首屏，则请求放在服务端，如果是客户端，当前放在客户端请求
> A: 借助axios或者node-fetch实现双端请求

* Q: 请求部分要准备两套逻辑？能否写在一个组件里，类似getInitialprops
> A: 

* Q: 如何保证加载页面时只加载对应的js文件和css文件？
> A: webpack dynamic import实现js懒加载，css文件用gulp

* Q: 为何直接修改节点属性会报warning，并且不会生效？
> A: 因为react balabala

* Q: Service worker有吗？
> A: 

* Q: 如何控制服务端内存泄漏问题？
> A: 

* Q: 如何控制浏览器端内存泄漏问题？
> A: 

* Q: 现在路由统一处理了，如何处理不同路由下的特殊服务端处理？
> A: 没问题，路由本身是中间件处理机制，统一的只是最后的渲染部分，还是可以做controller去控制不同路由对应不同逻辑

* Q: 每次服务端执行的代码都得重新build，如何解决本地开发问题？
> A: webpack watch


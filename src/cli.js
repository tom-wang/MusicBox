//// 简单实例
//// 第 1 步：创建一个 Vue 实例
//const Vue = require('vue')
//const app = new Vue({
//    template: `<div>Hello {{myname}}</div>`,
//    data: {
//        myname: 'tom'
//    }
//})
//// 第 2 步：创建一个 renderer
//const renderer = require('vue-server-renderer').createRenderer({
//    template: `<html>
//            <head>
//                <title>hello, world</title>
//            </head>
//            <body>
//                <div><!--vue-ssr-outlet--></div>
//            </body>
//        </html>`,
//    //如果开启inject，renderer生成html的步骤如下
//    //1 解析模板中的head部分
//    //2 拼接上context.head的内容
//    //3 拼接<link rel="preload" .../> <link rel="prefetch" .../>内容，具体内容来自clientManifest和
//    //4 拼接外链的style内容，使用<link rel="stylesheet" .../>，这些内容来自clientManifest
//    //5 拼接context.styles的内容
//    //6 解析模板中neck部分
//    //7 拼接服务器端组件渲染出来的内容
//    //8 拼接<script>window.__INITIAL_STATE = '';</script>内容，值为context.state序列化为JSON后的内容
//    //9 拼接外链的script内容，使用<script src="xxx" defer></script>，内容来自clientManifest
//    //10 解析模板中tail部分
//    //如果不开启inject
//    //则只进行以上1、6、7、10步骤
//    inject: true, // 默认值为true
//    //cache: {},
//    //shouldPreload: 是一个函数，用来决定资源是否要进行preload（需要preload则返回true），注意不控制prefetch
//    //shouldPrefetch: 是一个函数，用来决定资源是否要进行prefetch（需要prefetch则返回true），2.5.0+新增的
//    //clientManifest:
//    //directives:
//})
//const context = {
//    head: 'hello head', // inject开启时才会打入页面
//    styles: `<style>*{color:red}</style>`,
//    state: {a: 'b'},
//}
//// 第 3 步：将 Vue 实例渲染为 HTML
//renderer.renderToString(app, context).then((html) => console.log(html)).catch(err => console.log(err));

// 使用createBundleRenderer的例子
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8');
const clientManifest = require(path.join(__dirname, '../dist/vue-ssr-client-manifest.json'));
const serverBundle = require(path.join(__dirname, '../dist/vue-ssr-server-bundle.json'));
const renderer = createBundleRenderer(serverBundle, {
    //inject: false, //设置为false表示手动注入资源
    clientManifest,
    template,
    //basedir:
    //默认值为true，此时会在解析JS时每个请求都会创建一个新的上下文，好处是安全，不好的地方是性能开销大，建议设置为false
    runInNewContext: false
})
const context = { 
    title: 'vue srr starter', // default title
    url: '',
    foo: 'hi foo',
    bar: 'hi bar',
}
//非流式渲染
//renderer.renderToString(context, (err, html) => {
//    console.log(html)
//})

//流失渲染
const stream = renderer.renderToStream(context);
let html = ''
stream.on('data', data => {
    html += data.toString()
})
stream.on('end', () => {
    console.log(html) // 渲染完成
})
stream.on('error', err => {
    console.log(err);
})

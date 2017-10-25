// 使用createBundleRenderer的例子
const path = require('path');
const fs = require('fs');
const express = require('express');
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

//非流式渲染
//renderer.renderToString(context, (err, html) => {
//    console.log(html)
//})

const app = express();
const serveStatic = require('serve-static')
app.use(serveStatic(
    path.join(__dirname, '../dist/'),
    {'index': false}
));
app.get('/', (req, res) => {
    const context = { 
        title: 'vue ssr starter', // default title
        url: ''
    }
    //流式渲染
    const stream = renderer.renderToStream(context);
    stream.on('error', err => {
        console.log(err);
    })
    stream.pipe(res);
})
app.listen(3000, () => {
    console.log('listening on port 3000!')
})

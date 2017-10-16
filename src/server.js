// 使用createBundleRenderer的例子
const path = require('path');
const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8');
const clientManifest = require(path.join(__dirname, '../dist/vue-ssr-client-manifest.json'));
const serverBundle = path.join(__dirname, '../dist/vue-ssr-server-bundle.json');
const renderer = createBundleRenderer(serverBundle, {
    //inject: false, //设置为false表示手动注入资源
    clientManifest,
    template
    //basedir:
    //runInNewContext
})
const context = { 
    title: 'Vue HN 2.0', // default title
    url: 'http://localhost:8080/musicbox/dist/#/foo'
}
//非流式渲染
//renderer.renderToString(context, (err, html) => {
//    console.log(html)
//})

const app = express();
app.get('/', function (req, res) {
    //流式渲染
    const stream = renderer.renderToStream(context);
    stream.on('error', err => {
        console.log(err);
    })
    stream.pipe(res);
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

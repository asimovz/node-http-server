const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const { historyApiFallback }  = require('koa2-connect-history-api-fallback');
const app = new Koa();

// //这句代码需要在koa-static上面 
app.use(historyApiFallback({
  index: '/index.html'
})); 

//指定静态资源文件夹
app.use(static(path.join(__dirname, '/')))
// 监听
app.listen(8081, '0.0.0.0', (ctx) => {
    console.log('Listening 8081...')
});

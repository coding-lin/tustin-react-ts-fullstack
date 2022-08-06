const koa = require('koa')
const app = new koa()
const cors = require('koa2-cors')
const bannersRouter = require('./routers/banners')
const banners2Router = require('./routers/banners2')

// 挂载跨域中间件
app.use(cors())

// 挂载路由中间件
app.use(bannersRouter)
app.use(banners2Router)

app.listen(3300, () => {
  console.log('Your app is running')
})
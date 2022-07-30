const koa = require('koa')
const app = new koa()
const cors = require('koa2-cors')
const mainRouter = require('./routers/index')

// 挂载跨域中间件
app.use(cors())
// 挂载路由中间件
app.use(mainRouter)

app.listen(3300, () => {
  console.log('Your app is running')
})
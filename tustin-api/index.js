const koa = require('koa')
const app = new koa()
const cors = require('koa2-cors')

// 挂载跨域中间件
app.use(cors())

app.listen(3300, () => {
  console.log('Your app is running')
})
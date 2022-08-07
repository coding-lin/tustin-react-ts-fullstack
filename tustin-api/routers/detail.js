const router = require('koa-router')();
const detailData = require('../data/detail');

router.get("/detail", async (ctx) => {
  ctx.body = {
    data: detailData
  }
})

module.exports = router.routes();
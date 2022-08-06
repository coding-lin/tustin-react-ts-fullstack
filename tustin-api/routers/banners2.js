const router = require('koa-router')();
const banners2Data = require('../data/banners2');

router.get("/banners2", async (ctx) => {
  ctx.body = {
    data: banners2Data
  }
})

module.exports = router.routes();
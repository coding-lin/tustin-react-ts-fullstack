const router = require('koa-router')();
const bannersData = require('../data/banners');

router.get("/banners", async (ctx) => {
  ctx.body = {
    data: bannersData
  }
})

module.exports = router.routes();
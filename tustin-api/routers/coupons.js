const router = require('koa-router')();
const couponsData = require('../data/coupons');

router.get("/coupons", async (ctx) => {
  ctx.body = {
    data: couponsData
  }
})

module.exports = router.routes();
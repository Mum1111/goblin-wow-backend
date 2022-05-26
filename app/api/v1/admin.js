/**
 * @description 管理员的路由 API接口
 */

const Router = require('koa-router')

const router = new Router({
    prefix:'/api/v1/admin'
})

router.get('/auth', async ctx => {
    ctx.response.status = 200
    ctx.body = "ceshiyixia"
})

module.exports = router
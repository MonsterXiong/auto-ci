const router = require('koa-router')()
const userController = require('../controller/index')
// router.get('/', async ctx => {
//     await ctx.render('index', {
//         title: 'Hello Koa 2!',
//     })
// })
router.get('/', userController.index)
router.get('/json', userController.json)
module.exports = router

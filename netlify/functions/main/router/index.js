const Router = require('koa-router');

const checkLogin = require('../middleware/checkLogin')

const routeHandler = require('../controller/index')

const router = new Router({
    prefix: '/api'
});

//路由中间件
router
    .use(checkLogin) //所有路由都检验中间件，如果部分校验,可以使用 router.use(['login','init'],checkLogin)

router.get('/hello', routeHandler.hello)
router.get('/init', routeHandler.init)
router.get('/login', routeHandler.login)

module.exports = router
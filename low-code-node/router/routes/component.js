const router = require('koa-router')();
const controller = require('../../app/controller');
const Config = require('../../config');
router.prefix(Config.routePrefix); // 设置前缀

router.post('/component/upload',controller.component.upload);
router.get('/component/list',controller.component.list);
router.get('/component/list',controller.component.list);


module.exports = router;
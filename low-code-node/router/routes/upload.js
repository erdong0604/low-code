const router = require('koa-router')();
const controller = require('../../app/controller');
const Config = require('../../config');
router.prefix(Config.routePrefix); // 设置前缀

router.post('/upload/file',controller.upload.upload);

module.exports = router;
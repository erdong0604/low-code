const router = require('koa-router')();
const controller = require('../../app/controller');
router.get('/getPageData',controller.pageData.get);


module.exports = router;
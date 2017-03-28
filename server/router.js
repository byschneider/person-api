const router = require('express').Router();
const VERSION = process.env.API_VERSION || 1;

router.use(function middleware(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] - (${req.method.toUpperCase()}) ${req.baseUrl}${req.url}`);
    next();
});

router.use('/person', require('../api/person'));
// router.use('/image', require('../api/images'));

module.exports = {
    router,
    BASE_PATH: `/api/v${VERSION}`
}
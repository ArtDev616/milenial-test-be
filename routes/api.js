var express = require('express');
var router = express.Router();

var controller = require('../controllers');

router.route('/test').post(controller.test);

module.exports = router;

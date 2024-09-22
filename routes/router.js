const express = require('express');
const router = express.Router();
const controller = require('../controller/WarenController.js');
router.get('/', controller.main);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/product', controller.product);
router.get('/support', controller.support);


module.exports = router;

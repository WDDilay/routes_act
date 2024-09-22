const express = require('express');
const waren = express.Router();
const war = require('../controller/WarenController.js')
waren.get('/', war.main)

module.exports = waren;

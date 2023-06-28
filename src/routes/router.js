const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller')

// Dogs
router.get('/home',Controller.show)

module.exports = router;

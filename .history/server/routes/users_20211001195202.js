/* Shiv Bindra
     Student #  300758190
     Assignment 1
     COMP 229- SECTION 001
     DATE - OCTOBER, 01, 2021


 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;

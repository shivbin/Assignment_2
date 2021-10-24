/* Shiv Bindra
     Student #  300758190
     Assignment 1
     COMP 229- SECTION 001
     DATE - OCTOBER, 01, 2021


 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page back up if user writes /home. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about',  indexController.displayAboutPage);

/*
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about'});
});
*/
/* GET Projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact-me', indexController.displayContactsPage);


module.exports = router;

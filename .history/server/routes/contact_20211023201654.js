let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { rawListeners } = require('../models/contact');



//  connect to our contact model 

let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/*  Get Route for the Contact List page  - REad Operation   */

router.get('/', contactController.displayContactList);


/*  Get Route for displaying ADD Contact List page  - Create Operation   */

router.get('/add', contactController.diplayAddPage);

/*  POst Route for processing the ADD Contact List page  - Create Operation   */

router.post('/add', contactController.processAddPage);

/*  Get Route for displaying EDIT Contact List page  - Update Operation   */

router.get('/edit/:id', contactController.displayEditPage);

/*  Post Route for processing EDIT Contact List page  - Update Operation   */

router.post('/edit/:id', contactController.processEditPage);

/*  Get to perform Removing  Contact List page  - DELETE Operation   */

router.get('/delete/:id', contactController.performDelete);



module.exports = router;
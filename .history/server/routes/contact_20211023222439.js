let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let contactController = require('../controllers/contact');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in return user to login page
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}





/*  Get Route for the Contact List page  - REad Operation   */

router.get('/', contactController.displayContactList);


/*  Get Route for displaying ADD Contact List page  - Create Operation   */

router.get('/add', contactController.displayAddPage);

/*  POst Route for processing the ADD Contact List page  - Create Operation   */

router.post('/add', contactController.processAddPage);

/*  Get Route for displaying EDIT Contact List page  - Update Operation   */

router.get('/edit/:id', contactController.displayEditPage);

/*  Post Route for processing EDIT Contact List page  - Update Operation   */

router.post('/edit/:id', contactController.processEditPage);

/*  Get to perform Removing  Contact List page  - DELETE Operation   */

router.get('/delete/:id', contactController.performDelete);



module.exports = router;
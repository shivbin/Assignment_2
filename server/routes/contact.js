let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



//  connect to our contact model 

let Contact = require('../models/contact');

/*  Get Route for the Contact List page  - REad Operation   */

router.get('/', (req, res, next) => {
    Contact.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact', {title: 'Contact List', ContactList: contactList})
        }
    });
});


/*  Get Route for displaying ADD Contact List page  - Create Operation   */

router.get('/add', (req, res, next) => {

});

/*  POst Route for processing the ADD Contact List page  - Create Operation   */

router.post('/add', (req, res, next) => {

});

/*  Get Route for displaying EDIT Contact List page  - Update Operation   */

router.get('/edit/:id', (req, res, next) => {

});

/*  Post Route for processing EDIT Contact List page  - Update Operation   */

router.post('/edit/:id', (req, res, next) => {

});

/*  Get to perform Removing  Contact List page  - DELETE Operation   */

router.get('/delete/:id', (req, res, next) => {

});



module.exports = router;
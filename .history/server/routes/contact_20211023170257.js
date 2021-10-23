let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { rawListeners } = require('../models/contact');



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

            res.render('contact/list', {title: 'Contact List', ContactList: contactList});
        }
    });
});


/*  Get Route for displaying ADD Contact List page  - Create Operation   */

router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});

});

/*  POst Route for processing the ADD Contact List page  - Create Operation   */

router.post('/add', (req, res, next) => {
let newContact = Contact({
    "contact_name": req.body.contact_name,
     "contact_number": req.body.contact_number,
     "email_address": req.body.email_address
});

Contact.create(newContact, (err, Contact) =>{
            if(err)
            {
                 console.log(err);
                  res.end(err);
            }
            else
            {
                // refresh  The Contact List
                res.redirect('/contact-list');

            }
    });
});

/*  Get Route for displaying EDIT Contact List page  - Update Operation   */

router.get('/edit/:id', (req, res, next) => {
let id = req.params.id;

Contact.findById(id, (err, contactToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Show the edit view 
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
   });
});

/*  Post Route for processing EDIT Contact List page  - Update Operation   */

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email_address": req.body.email_address
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            // Refresh the Contact List
            res.redirect('/contact-list');
        }
    });
});

/*  Get to perform Removing  Contact List page  - DELETE Operation   */

router.get('/delete/:id', (req, res, next) => {
let id = req.params.id;

Contact.remove({_id: id}, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // Refresh the Contact List
        res.redirect('/contact-list');
    }
       });
});



module.exports = router;
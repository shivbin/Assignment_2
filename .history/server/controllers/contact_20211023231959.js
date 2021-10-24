let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the contact model 

let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact/list', {title: 'Contact List', ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});

}

module.exports.processAddPage =  (req, res, next) => {
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
    }

    module.exports.displayEditPage = (req, res, next) => {
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
        }

        module.exports.processEditPage = (req, res, next) => {
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
}
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}
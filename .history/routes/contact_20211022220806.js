let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



//  connect to our contact model 

let Contact = require('../models/contact');

/*  Get Route for the Contact List page  - REad Operation   */

router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) =>{
        if(err){
            return console.error(err);
        }
        else
        {
            console.log(ContactList);
        }
    });
});
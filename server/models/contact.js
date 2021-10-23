let mongoose = require('mongoose');

//  Create a model class

let contactModel = mongoose.Schema({

    contact_name: String,
    contact_number: String,
    email_address: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone_number: {type: Number, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    online_status: {type: String, required: true}    
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);
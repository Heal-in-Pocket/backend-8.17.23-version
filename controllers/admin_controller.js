const HttpError = require('../models/http_error');
const Doctor = require('../models/admin');
const signup = async (req, res, next) => {
    /* potentially can check whether the input of the signup proccess 
     *  is valid using validationResult from express-validator */

    const {name, email, phone_number, password} = req.body;

    const createdDoctor = new Admin({
        username,
        email,
        phone_number,
        password,
        online_status: 'online'
    });

}
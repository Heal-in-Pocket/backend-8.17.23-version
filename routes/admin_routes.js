const express = require('express');

const doctorControllers = require('../controllers/admin_controller');

const router = express.Router();

// doctor sign up
router.post('/signup', adminControllers.signup);

// doctor log in
router.post('/login', adminControllers.login);

// get all the doctors
router.get('/all', adminControllers.getAllDoctors);

//get all online doctors
router.get('/online', adminControllers.getOnlineDoctors);


module.exports = router;
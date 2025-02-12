const express = require('express');
const userRoute = express.Router();
const { receiveData } = require('../middlewares/dataManupulationMidd');
const { data } = require('../controllers/userController');

userRoute.get('', receiveData, data)

module.exports = userRoute

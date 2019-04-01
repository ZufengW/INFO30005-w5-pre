const express = require('express');
const controller = require('../controllers/controller.js');

const router = express.Router();

// Get all users
router.get('/', controller.getAllUsers);

// Get a specific user
router.get('/:id', controller.getUserById);

// Create a new user
router.post('/', controller.createUser);


// Note that the common "/users" prefix of these routes appears in app.js where the router is used

module.exports = router;

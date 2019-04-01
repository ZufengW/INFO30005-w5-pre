const mongoose = require('mongoose');
const User = mongoose.model('users');


// Get list of all users
const getAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(users);
    }
  });
};

// Get one user
const getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else {
      // NOTE: possibility of no error and no user found
      res.json(user);
    }
  });
};

// Add a new user
const createUser = function (req, res) {
  const user = new User({
    "name": req.body.name,
    "email": req.body.email,
    "avatar": req.body.avatar,
  });
  user.save(function (err, newUser) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(newUser);
    }
  });
};

// Remember to export the callbacks
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

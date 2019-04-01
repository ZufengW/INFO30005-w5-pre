const express = require('express');
const app = express();
const mongoose = require('mongoose');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up db
require('./models/db.js');

// routes set up
// const routes = require('./routes/routes.js');
// app.use('/', routes);


app.get('/', (req, res) => {
  res.send('hello home page');
});

// controller code?
const User = mongoose.model('users');

// Get all users
app.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(users);
    }
  });
  // res.send('hello users page');
});

// Add a new user
const createUser = function (req, res) {
  const user = new User({
    "name": req.body.name,
    "email": req.body.email,
    "avatar": req.body.avatar,
  });
  user.save(function (err, newUser) {
    if (!err) {
      res.json(newUser);
    } else {
      res.sendStatus(500);
    }
  });
};

const getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else {
      // NOTE: possibility of no user
      res.json(user);
    }
  });
};

// Get all users
app.post('/users', createUser);
// Get a specific user
app.get('/users/:id', getUserById);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listening on port 3000');
});

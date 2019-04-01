const mongoose = require('mongoose');

// don't hard-code the database url
const DB_URL = process.env.DB || 'NOPE';

mongoose.connect(DB_URL,
    {useNewUrlParser: true},
    (err) => {
      if (err) {
        console.log('failed to connect to database:', DB_URL);
      } else {
        console.log('connected to database');
      }
    });

// Set up user model
require('./users');

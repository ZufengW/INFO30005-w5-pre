const mongoose = require('mongoose');

// Don't hard-code the database URI
// Note that 'mongodb://localhost:27017/myapp' is a sample local URI
const DB_URL = process.env.DB || 'mongodb://localhost:27017/myapp';

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

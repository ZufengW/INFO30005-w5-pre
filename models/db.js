const mongoose = require('mongoose');

// don't hard-code the database url
const DB_URL = process.env.DB || 'NOPE';

mongoose.connect(DB_URL,
    {useNewUrlParser: true},
    (err) => {
      if (err) {
        console.log('failed to connect to db:', DB_URL);
      } else {
        console.log('connected to DB');
      }
    });

require('./users');  // naming?

const mongoose = require('mongoose');

// You can put any attributes you like. This is just an example
const userSchema = mongoose.Schema(
    {
      'name': String,
      'email': String,
      'avatar': String,
    }
);

mongoose.model('users', userSchema);

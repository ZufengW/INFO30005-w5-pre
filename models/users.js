const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
      'name': String,
      'email': String,
      'avatar': String,
    }
);

mongoose.model('users', userSchema);

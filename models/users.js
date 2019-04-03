const mongoose = require('mongoose');

// You can put any attributes you like. This is just an example
const userSchema = mongoose.Schema(
    {
      'name': { type: String, required: true },
      'email': { type: String, required: true },
      'avatar': String,
    }
);

mongoose.model('users', userSchema);

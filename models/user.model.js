const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user object model
const userSchema = new Schema({
  username: {
    type: String,
    require: [true, 'Username is missing, but required'],
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

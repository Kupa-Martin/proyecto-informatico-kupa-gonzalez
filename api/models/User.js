const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    avatar: {type: Img, required: true},
    username:{type: String, unique: true, required: true},
    password:{type: String, unique:true, required:true}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
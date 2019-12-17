var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	phoneNumber: {type: String, default: ""},
	postedBooks:  {type: [String], default: []},
	wishedBooks: {type: [String], default: []},
	userPhoto: {type: String, default: "https://res.cloudinary.com/dxit5qwki/image/upload/v1552335256/1.png"},
	dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', userSchema);
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	title: {type: String, required: true},
	college: {type: String, default: "Not Assigned"},
	description: {type: String, default: ""},
	picture: {type: String, default: "https://res.cloudinary.com/dxit5qwki/image/upload/v1552335256/1.png"},
	price: {type: Number, required: true},
	assignedUser: {type: String, required: true},
	// assignedUserName: {type: String, required: false},
	watchedUsers: {type: [String], default: []},
	dateCreated: {type: Date, default: Date.now},
	rawPic: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('books', bookSchema);
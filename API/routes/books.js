var express = require('express'),
	router = express.Router(),
	books = require('../models/bookSchema'),
	users = require('../models/userSchema');
	multer = require("multer");
	cloudinary = require("cloudinary");
	cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
	cloudinary: cloudinary,
	folder: "project",
	allowedFormats: ["jpg", "png"],
	transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage });


router.get('/', (req, res) => {
	var where  = req.query.where ? JSON.parse(req.query.where) : {},
		sort   = req.query.sort ? JSON.parse(req.query.sort) : {},
		select = req.query.select ? JSON.parse(req.query.select) : {},
		skip   = req.query.skip ? Number.parseInt(req.query.skip, 10) : 0;

	var query  = books.find({}).where(where).sort(sort).select(select).skip(skip);

	if(req.query.limit) {
		query = query.limit(Number.parseInt(req.query.limit, 10));
	}

	if(req.query.count === 'true') {
		query = query.count();
	}
		// console.log(query);
	query.exec({}, (err, res_books) => {
		if (err) {
			res.status(500).send({
				message: 'Server Error',
				data: []
			});
			return;
		} 
		res.status(200).send({
			message: 'OK',
			data: res_books,
		})
		
	})
});

router.post('/', parser.single("image"), function (req, res) {

		console.log(req.body)

		if (req.file != undefined) {
			console.log("here")
			req.body.picture = req.file.url;
		}

		books.create(req.body, function(err, newbook) {
	    	if (err) {
				res.status(500).send({
					message: err,
					data: []
				});
				return;
			}
			// console.log(req.body.assignedUser)
			// console.log(req.body.completed, (!req.body.completed  || req.body.completed == false))


			users.findOneAndUpdate({_id: req.body.assignedUser}, {$push: {postedBooks: newbook._id}}, (err, user) => {
				// console.log(user.pendingBooks);
				if(err) {
					res.status(500).send({
						message: err,
						data: {}
					});
					return;
				}
				if(!user) {
					res.status(404).send({
						message: 'Assigned User Not Found',
						data: []
					});
					return;
				}
			});

			res.status(201).send({
				message: 'OK',
				data: newbook,
			})
	    })
	
    
});

router.get('/:id', function(req, res) {
	books.findOne({_id: req.params.id}, function(err, book) {
		if(err) {
			res.status(500).send({
				message: err,
				data: []
			});
			return;
		} 
		if(!book) {
			res.status(404).send({
				message: 'Book Not Found',
				data: []
			});
			return;
		}
		res.status(200).send({
			message: 'OK',
			data: book
		})
	})
});

router.put('/:id', function(req, res) {
	books.findOne({_id: req.params.id}, (err, res_books) => {
		if(err) {
			res.status(500).send({
				message: err,
				data: {}
			});
			return;
		} 
		if(!res_books) {
			res.status(404).send({
				message: 'Book Not Found',
				data: []
			});
			return;
		}

		books.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}, (err, book) => {
			if(err) {
				res.status(500).send({
					message: err,
					data: {}
				});
			} else {
				res.status(200).send({
					message: 'Book Updated',
					data: book
				});
			}
		});
	})
});

router.delete('/:id', function(req, res) {
	books.findOne({_id: req.params.id}, function(err, book) {
		if(err) {
			res.status(500).send({
				message: err,
				data: []
			});
			return;
		} else if(!book) {
			res.status(404).send({
				message: 'Book Not Found',
				data: []
			});
			return;
		} else {
			
			books.deleteOne({_id: req.params.id}, function(err) {
				if(err) {
					res.status(500).send({
						message: err,
						data: 2
					});
					return;
				}
				res.status(200).send({
					message: 'Book Deleted',
				});
			})

			users.findOneAndUpdate({_id: book.assignedUser}, {$pull: {postedBooks: book._id}}, {new: true}, (err, user) => {

			});

			users.updateMany({_id: {$in: book.watchedUsers}}, {$pull: {wishedBooks: book._id}}, {new: true}, (err, user) => {
				// console.log(book)
				if(err) {
					res.status(500).send({
						message: err,
						data: {}
					});
					return;
				}
			});
				
		}
	})

	
});

module.exports = router;
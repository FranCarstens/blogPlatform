const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
	// required for authentication: DO NOT TOUCH Or You May Get Punched
	email: { type: String, required: true },
	password: { type: String, required: true },
	// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

	// example of optional fields
	username: { type: String },
	createdAt: { type: Date, default: Date.now }

})


// ### BLOG POSTS

const blogSchema = new mongoose.Schema({
	user_id: { type: String, required: true },
	username: { type: String, required: true},
	title: { type: String, required: true },
	body: { type: String, required: true },
	tags: Array,
	createdAt: { type: Date, default: Date.now }
})

// ### COMMENTS

const commentSchema = new mongoose.Schema({
	user_id: { type: String, required: true },
	blog_id: { type: String, required: true },
	body: { type: String, required: true },
	createdAt: { type: Date, default: Date.now }
})

module.exports = {
	User: mongoose.model('User', usersSchema),
	Blog: mongoose.model('Blog', blogSchema),
	Comment: mongoose.model('Comment', commentSchema)
}
let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let	Blog = require('../db/schema.js').Blog
let	Comment = require('../db/schema.js').Comment


// ### USERS

apiRouter
	.get('/users', function(req, res){
		User.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
				res.json(results)
		})
	})

apiRouter
	.get('/users/:_id', function(req, res){
		User.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
				res.json(record)
		})
	})
	.put('/users/:_id', function(req, res){

		User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('no record found with that id')
			}
			else {
				res.json(Object.assign({},req.body,record))
			}
		})
	})

	.delete('/users/:_id', function(req, res){
		User.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
				res.json({
					msg: `record ${req.params._id} successfully deleted`,
					_id: req.params._id
				})
		})  
	})

	// Routes for a Model(resource) should have this structure


// ### BLOGPOST ROUTES

apiRouter

	.post('/blog', function(req, res) {
		var recordObj = new Blog(req.body)
		recordObj.save(function(err) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(recordObj)
			}
		})
	})
	.get('/blog', function(req,res) {
		Blog.find(req.query, function(err, records) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(records)
			}
		})
	})
	.get('/blog/:_id', function(req,res) {
		Blog.findById(req.query, function(err, record) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(record)
			}
		})

	})
	.delete('/blog/:_id', function(req, res) {
		delete req.body._id
		Blog.findByIdAndRemove(req.params._id, req.body, function(err, record) {
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('the post you\'re trying to delete doesn\'t exist.')
			}
			else {
				res.json(req.body)
			}
		})

	})

// ### COMMENT ROUTES

apiRouter
	.post('/comments', function(req, res) {
		var recordObj = new Comment(req.body)
		recordObj.save(function(err) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(recordObj)
			}
		})
	})
	.get('/comments', function(req, res) {
		Comment.find(req.query, function(err, records) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(records)
			}
		})

	})
	.get('/comments/:_id', function(req, res) {
		Comment.findById(req.query, function(err, record) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(record)
			}
		})
	})
	.delete('/comments/:_id', function(req, res) {
		Comment.findByIdAndRemove(req.query, function(err, record) {
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('the comment you\'re tryint to delete no longer exist')
			}
			else {
				res.json(record)
			}
		})
	})


module.exports = apiRouter
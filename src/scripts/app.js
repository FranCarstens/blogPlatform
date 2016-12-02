// ### LIBRARIES & SYSTEM

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

// ### COMPONENTS & VARIABLES

import AllBlogs from './views/allBlogs.js'
import UserBlogs from './views/userBlogs.js'
import MyBlog from './views/myBlogs.js'
import Blog from './views/blog.js'
import Login from './views/login.js'
import Create from './views/create.js'

// ### CONTROLLER
const app = function() {

	const Controller = Backbone.Router.extend({
		routes: {
			'home' : 'handleHome',
			'blogs/:username' : 'handleUserBlogs',
			'blogs/:username/:postid' : 'handlePost',
			'user/blog' : 'handleMyBlogs',
			'login' : 'handleLogin',
			'create' : 'handleCreate',
			'*default' : 'handleDefault'
		},
		handleHome() {
			console.log('handleHome checking in')
			ReactDOM.render(<AllBlogs />, document.querySelector('.body_container'))
		},
		handleUserBlogs(username) {
			console.log('handleUserBlogs checking in')
			ReactDOM.render(<UserBlogs username={username} />, document.querySelector('.body_container'))
		},
		handleMyBlogs() {
			console.log('handleMyBlogs checking in')
			ReactDOM.render(<MyBlog />, document.querySelector('.body_container'))
		},
		handlePost(username, postid) {
			console.log('handlePost checking in')
			ReactDOM.render(<Blog username={username} postid={postid} />, document.querySelector('.body_container'))
		},
		handleLogin() {
			console.log('handleLogin checking in')
			ReactDOM.render(<Login />, document.querySelector('.body_container'))
		},
		handleCreate() {
			console.log('handleCreate checking in')
			ReactDOM.render(<Create />, document.querySelector('.body_container'))
		},
		handleDefault() {
			location.hash = 'home'
		},
		initialize() {
			Backbone.history.start()
		}

	})

	new Controller()

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
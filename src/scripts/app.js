// ### LIBRARIES & SYSTEM

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

// ### COMPONENTS & VARIABLES

import BlogRoll from './views/blogRoll.js'
import Blog from './views/blog.js'
import Login from './views/login.js'
import Create from './views/create.js'

// ### CONTROLLER
const app = function() {

	const Controller = Backbone.Router.extend({
		routes: {
			'home' : 'handleHome',
			'blogs/:username' : 'handleBlogs',
			'blogs/myblogs' : 'handleMyBlogs',
			'blogs/:username/:postid' : 'handlePost',
			'login' : 'handleLogin',
			'create' : 'handleCreate',
			'*default' : 'handleDefault'
		},
		handleHome() {
			console.log('handleHome checking in')
			ReactDOM.render(<BlogRoll />, document.querySelector('.body_container'))
		},
		handleBlogs(username) {
			console.log('handleBlogs checking in')
			ReactDOM.render(<BlogRoll username={username}/>, document.querySelector('.body_container'))
		},
		handleBlogs(username) {
			console.log('handleBlogs checking in')
			ReactDOM.render(<BlogRoll username={username}/>, document.querySelector('.body_container'))
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
// ### LIBRARIES & SYSTEM
import Backbone from 'backbone'
import _ from 'underscore'
import React from 'react'
import Store from './store'

// ### COMPONENTS & VARIABLES
import User from './models/userModel'
import {BlogModel, BlogCollection} from './models/postModel'
import {CommentModel, CommentCollection} from './models/commentModel'

// ### ACTIONS

const Actions = {

// ### USERS

	userRegister(userObj) {
		User.register(userObj)
			.then(
				function(resp) {

				},
				function(err) {
					console.log('registration failed', err)
				}
			)
	},
	userLogin(email, password) {
		User.login(email, password)
			.then(
				function(resp) {
					location.hash = 'home'
				},
				function(err) {
					console.log('login failed', err)
				}
			)
	},
	userLogout() {
		User.logout()
			.then(
				function(resp) {
					location.hash = 'login'
					console.log('user successfully logged out')
				},
				function(err) {
					console.log('logout failed', err)
				}
			)
	},

// ### BLOG POSTS

	submitPost(blogPost) {
		var post = new BlogModel(blogPost)
		post.save()
			.done((resp) => {
				console.log('successfully saved', resp)
				location.hash = 'home'
				})
			.fail((resp) => console.log('save failed', resp))
	},
	fetchAllBlogPosts() {
		console.log('fetching all posts')
		var blogColl = new BlogCollection()
		blogColl.fetch()
			.then(function() {
				Store._setData({
					blogRoll: blogColl
				})
			})
	},
	fetchSpecifiedUserBlogPosts(username) {
		console.log('fetching user posts')
		var blogColl = new BlogCollection()
		blogColl.fetch({
			data: {
				username: username
			}
		}).then(function() {
			Store._setData({
				blogRoll: blogColl
			})
		})
	},
	fetchCurrentUserBlogPosts() {
		console.log('fetching current user posts')
		var blogColl = new BlogCollection()
		blogColl.fetch({
			data: {
				username: User.getCurrentUser().username
			}
		}).then(function() {
			Store._setData({
				blogRoll: blogColl
			})
		})
	},
	fetchBlogPost(id) {
		var post = new BlogModel({
			_id: id
		})
		post.fetch()
			.then(function() {
				Store._setData({
					blogPost: post
				})
			}),
			function(err) {
				console.log('fetch error', err)
			}
	},
	editPost() {
		console.log('editing not currently available')
	},
	deletePost(cid) {
		let blogColl = Store._getDataProp('blogRoll')
		let mod = blogColl.get(cid)
		mod.destroy()
			.done((resp) => console.log('post successfully deleted', resp))
			.fail((resp) => console.log('delete failed', resp))
		Store._emitChange()
		location.hash = 'home'
	},	

// ### HELPER FUNCTIONS

	arrayToList(str, i) {
		return <li key={i}><a href="#blogs/tag/str">{str}</a></li>
	},
	formatMarkup(markup) {
		return markup.replace(/[\n\r]/g, '<br>')
	},
	htmlMaker(markup) {
		return {__html: this.formatMarkup(markup)}
	},
	fancifyDate(dateStr) {
		var date = new Date(dateStr)
		var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		return `${date.getDate()} ${month[date.getMonth()]}, '${date.getYear() - 100} at ${date.getHours()}:${date.getMinutes()}`
	},
	toCleanArray(str1) {
		let arr1 = (str1.split(','))
		let arr2 = arr1.map((str2) => str2.trim())
		return arr2
	}

}

export default Actions
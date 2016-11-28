// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES

import User from '../models/userModel'
window.User = User


// ### PRIMARY COMPONENTS

const CreatePost = React.createClass({
	_tagsToArray(str) {
		return Actions.toCleanArray(str)
	},
	_submitPost(e) {
		e.preventDefault()
		let blogPost = {
			title: e.target.title.value,
			body: e.target.body.value,
			tags: this._tagsToArray(e.target.tags.value),
			user_id: User.getCurrentUser()._id,
			username: User.getCurrentUser().username
		}
		Actions.submitPost(blogPost)
	},
	render() {
		return (
			<div>
				<form onSubmit={this._submitPost}>
					<h3>Start something new</h3>
					<div className="title_wrapper">
						<label>Title</label>
						<input name="title" type="text" maxLength="32" placeholder="Titles should be short and sweet" />
					</div>
					<div className="body_wrapper">
						<label>Body</label>
						<textarea name="body" placeholder="More aah!; less blah!" />
					</div>
					<div className="tags_wrapper">
						<label>Tags</label>
						<input name="tags" placeholder="A list of comma, separated, tags." />
					</div>
					<div className="actions_wrapper">
						<button name="submit" type="submit">Post</button>
					</div>
				</form>
			</div>
		)
	}
})

export default CreatePost
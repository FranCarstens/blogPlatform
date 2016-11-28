// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES



// ### PRIMARY COMPONENTS

const Comment = React.createClass({
	_submitComment(e) {
		e.preventDefault()
		let comment = e.target.comment.value
		Actions.submitComment(comment)
	},
	render() {
		return (
			<div>
				<form onSubmit={this._submitComment}>
					<div className="comment_wrapper">
						<textare name="comment" />
					</div>
					<div className="actions_wrapper">
						<button name="submit" type="submit">Post Comment</button>
					</div>
				</form>
			</div>
		)
	}
})

export default Comment
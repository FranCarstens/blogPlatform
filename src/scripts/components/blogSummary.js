// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES




// ### PRIMARY COMPONENTS

const BlogSummary = React.createClass({
	_arrayToList(str, i) {
		return Actions.arrayToList(str, i)
	},
	_fancifyDate(date) {
		return Actions.fancifyDate(date)
	},
	_editPost(e) {
		e.preventDefault()
		console.log('editing is not currently available')
	},
	_deletePost(e) {
		e.preventDefault()
		Actions.deletePost(this.props.model.cid)
	},
	_htmlSummary(markup) {
		return Actions.htmlSummary(markup)
	},
	render() {
		let title = this.props.model.get('title'),
			body = this._htmlSummary(this.props.model.get('body')),
			tags = this.props.model.get('tags'),
			author = this.props.model.get('username'),
			date = this._fancifyDate(this.props.model.get('createdAt')),
			id = this.props.model.get('_id'),
			key = this.props.model.cid
		return (
			<article>
				<h3><a href={`#blogs/${author}/${id}`}>{title}</a></h3>
				<div className="byline"><a href={`#blogs/${author}`} className="author">{author}</a> @ <span className="date">{date}</span></div>
				<div className="post_body" dangerouslySetInnerHTML={body}></div>
				<div className="tags"><ul>{tags.map(this._arrayToList)}</ul></div>
			</article>
		)
	}
})

export default BlogSummary
// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import BlogSummary from '../components/blogSummary'


// ### PRIMARY COMPONENTS
const BlogRoll = React.createClass({
	render() {
		let blogCollection = this.props.collection
		if (this.props.username) { let username = this.props.username }
		return(
			<div className="body_wrapper">
				<Header />
				<h3>{this.props.username}</h3>
				<BlogPosts collection={blogCollection} />
				<Footer />
			</div>
		)
	}
})

const BlogPosts = React.createClass({
	_getPost(model, i) {
		let key = this.props.collection.models[i].cid
		return <BlogSummary model={model} key={key} />
	},
	render() {
		var blogColl = this.props.collection
		return (
			<section className="content_wrapper">
				{ blogColl.map(this._getPost) }
			</section>
		)
	}
})

export default BlogRoll


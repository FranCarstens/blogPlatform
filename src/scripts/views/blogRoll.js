// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import BlogPost from '../components/blogPost'



const BlogRoll = React.createClass({
	componentWillMount() {
		if (this.props.username === 'myblogs') {
			Actions.fetchCurrentUserBlogPosts()
		}
		else if (this.props.username) {
			Actions.fetchSpecifiedUserBlogPosts(this.props.username)
		}
		else {
			Actions.fetchAllBlogPosts()
		}
		Store.on('dataChanged', () => {
			this.setState(
				Store._getData()
			)
		})
	},
	componentWillUnmount() {
		Store.off('dataChanged')
	},
	getInitialState() {
		return Store._getData()
	},
	render() {
		let blogCollection = this.state.blogRoll
		let username = this.props.username
		return(
			<div className="body_wrapper">
				<Header />
				<BlogPosts collection={blogCollection} />
				<Footer />
			</div>
		)
	}
})

const BlogPosts = React.createClass({
	_getPost(model, i) {
		let key = this.props.collection.models[i].cid
		return <BlogPost model={model} key={key} />
	},
	render() {
		var blogColl = this.props.collection
		return (
			<div>
				{ blogColl.map(this._getPost) }
			</div>
		)
	}
})

export default BlogRoll
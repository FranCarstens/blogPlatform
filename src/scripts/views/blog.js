// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import BlogPost from '../components/blogPost'



const Blog = React.createClass({
	componentWillMount() {
		let id = this.props.postid
		Actions.fetchBlogPost(id)
		console.log('that fired')
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
		console.log(this.state)
		console.log(this.props)
		return(
			<div className="body_wrapper">
				<Header />
				<BlogPost id={this.props.postid} model={this.state.blogPost} />
				<Footer />
			</div>
		)
	}
})

export default Blog
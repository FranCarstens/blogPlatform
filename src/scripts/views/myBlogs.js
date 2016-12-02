// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import BlogRoll from '../components/blogRoll'


// ### PRIMARY COMPONENTS
const MyBlog = React.createClass({
	componentWillMount() {
		console.log('my blogs here')
		Actions.fetchCurrentUserBlogPosts()
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
		return (
			<div>
				<BlogRoll collection={ this.state.blogRoll } />
			</div>
		)
	}
})

export default MyBlog



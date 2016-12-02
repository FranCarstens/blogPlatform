// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES





// ### PRIMARY COMPONENTS

const UserLinks = React.createClass({
	_logoutUser(e) {
		e.preventDefault()
		Actions.userLogout()
	},
	render() {
		return (
			<nav className="user_links">
				<ul>
					<li className="anon_user"><a href="#login">Register</a></li>
					<li className="anon_user"><a href="#login">Login</a></li>
					<li className="reg_user"><a href="#create">Create New</a></li>
					<li className="reg_user"><a href="#user/blog">My Blog</a></li>
					<li className="reg_user"><a href="." onClick={this._logoutUser} >Logout</a></li>
				</ul>
			</nav>
		)
	}
})

export default UserLinks
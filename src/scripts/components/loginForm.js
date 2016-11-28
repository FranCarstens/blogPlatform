// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES
import User from '../models/userModel'





// ### PRIMARY COMPONENTS

const LoginForm = React.createClass({
	_userLogin(e) {
		e.preventDefault()
		let email = e.target.email.value,
			password = e.target.password.value
		Actions.userLogin(email, password)
	},
	render() {
		return (
			<div className="login_form">
				<form onSubmit={this._userLogin}>
					<h3>Login</h3>
					<input name="email" type="email" className="email" />
					<input name="password" type="password" className="password" />
					<button type="submit" className="button_primary">Login</button>
				</form>
			</div>
		)
	}
})

export default LoginForm
// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES
import User from '../models/userModel'



// ### PRIMARY COMPONENTS

const RegisterForm = React.createClass({
	_userRegister(e) {
		e.preventDefault()
		let userDetails = {
			username: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value
		}
		Actions.userRegister(userDetails)
	},
	render() {
		return (
			<div className="login_form">
				<form onSubmit={this._userRegister}>
					<h3>Register</h3>
					<p>Join us, blog your heart out!</p>
					<input name="username" type="text" className="username" />
					<input name="email" type="email" className="email" />
					<input name="password" type="password" className="password" />
					<button type="submit" className="button_primary">Register</button>
				</form>
			</div>
		)
	}
})

export default RegisterForm
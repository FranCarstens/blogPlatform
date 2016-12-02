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
			<div className="register_form">
				<form onSubmit={this._userRegister}>
					<h3>Register</h3>
					<p>Join us, blog your heart out!</p>
					<div className="username-wrapper">
						<input name="username" type="text" className="username" />
						<label htmlFor="username">choose a username</label>
					</div>
					<div className="email-wrapper">
						<input name="email" type="email" className="email" />
						<label htmlFor="email">email</label>
					</div>
					<div className="password-wrapper">
						<input name="password" type="password" className="password" />
						<label htmlFor="password">password</label>
					</div>
					<div className="actions_wrapper">
						<button type="submit" className="button_primary">Register</button>
					</div>
				</form>
			</div>
		)
	}
})

export default RegisterForm
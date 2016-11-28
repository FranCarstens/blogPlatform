// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'

import User from '../models/userModel'



// ### PRIMARY COMPONENTS

const Login = React.createClass({
	render() {
		return(
			<div>
				<Header />
				<RegisterForm />
				<LoginForm />
				<Footer />
			</div>
		)
	}
})

export default Login
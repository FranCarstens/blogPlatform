// ### LIBRARIES & SYSTEM
import React from 'react'

// ### COMPONENTS & VARIABLES
import CreateForm from '../components/createForm'
import Header from '../components/header'
import Footer from '../components/footer'



const Create = React.createClass({
	render() {
		return(
			<div className="body_wrapper">
				<Header />
				<CreateForm />
				<Footer />
			</div>
		)
	}
})

export default Create
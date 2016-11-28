// ### LIBRARIES & SYSTEM
import React from 'react'
import Actions from '../actions'
import Store from '../store'

// ### COMPONENTS & VARIABLES
import UserLinks from './userLinks'





// ### PRIMARY COMPONENTS

const Header = React.createClass({
	render() {
		return (
			<header>
				<div className="logo">Bloge</div>
				<nav>
					<ul>
						<li><a href="#home">All Blogs</a></li>
						<li><a href="." onClick={this._discover}>Discover</a></li>
					</ul>
				</nav>
				<UserLinks />
			</header>
		)
	}
})

export default Header
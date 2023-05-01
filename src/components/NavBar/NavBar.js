import React, { useState } from 'react'
import "./NavBar.css"

const NavBar = () => {

	const [nav, setNav] = useState(true);

	function navState() {
		setNav(!nav);
	}

	let navStyle = {
		left: "0px"
	}

	if(nav) {
		navStyle = {
			left: "100%"
		}
	}

	return (
		<div className='NavBar'>
			<nav>
				<div className="logo">
					<img src="assets/neofi.svg" alt="" className='logo-name'/>
				</div>
				<ul className='navList' style={navStyle}>
					<div className="centered-navs">
						<li className='navLinkContainer'><a className='navLink' href="">Trade</a></li>
						<li className='navLinkContainer'><a className='navLink' href="">Earn</a></li>
						<li className='navLinkContainer'><a className='navLink' href="">Support</a></li>
						<li className='navLinkContainer'><a className='navLink' href="">About</a></li>
					</div>
					<div className="right-navs">
						<li><button className='wallet btn-theme'>Connect Wallet</button></li>
					</div>
				</ul>
				<input type="checkbox" id='check'/>
				<label onClick={navState} htmlFor='check' className='checkbtn'>
					<i className='fas fa-bars'></i>
				</label>
			</nav>
		</div>
	)
}

export default NavBar
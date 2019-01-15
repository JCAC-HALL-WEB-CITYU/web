import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./header.css";

class Header extends React.Component
{
	render()
	{
		return (
			<div >

				<h1><Link class=" href" to="/">JCAC</Link></h1>

				<nav id="nav">
					<ul>
						<li ><Link to="/">Home</Link></li>
						{/* <li className="current">
							<a href="#">Dropdown</a>
							<ul>
								<li><a href="#">Lorem ipsum dolor</a></li>
								<li><a href="#">Magna phasellus</a></li>
								<li><a href="#">Etiam dolore nisl</a></li>
								<li>
									<a href="#">Phasellus consequat</a>
									<ul>
										<li><a href="#">Magna phasellus</a></li>
										<li><a href="#">Etiam dolore nisl</a></li>
										<li><a href="#">Veroeros feugiat</a></li>
										<li><a href="#">Nisl sed aliquam</a></li>
										<li><a href="#">Dolore adipiscing</a></li>
									</ul>
								</li>
								<li><a href="#">Veroeros feugiat</a></li>
							</ul>
						</li> */}
						<li><Link to="/about">About JCAC</Link></li>
						<li><Link to="/hall_management">Hall Management</Link></li>
						<li><Link to="/event">Events</Link></li>
						<li><Link to="right-sidebar.html">Achievements</Link></li>
						<li><Link to="no-sidebar.html">Hall Life</Link></li>
					</ul>
				</nav>

			</div>
		);
	}
}
export default Header;
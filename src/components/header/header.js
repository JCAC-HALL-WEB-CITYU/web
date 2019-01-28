import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./header.css";
import
{
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';


class Header extends React.Component
{
	constructor(props)
	{
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle()
	{
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render()
	{
		return (
			<div >
				<img className="headerLogo" src="./web/homepage/jcaclogo.jpg" />
				<h1><Link class=" href" to="/">JCAC</Link></h1>
				<h3 className="nixie">Jockey Club Academy Hall</h3>
				{/* <nav id="nav">
					<ul>
						<li ><Link to="/">Home</Link></li>
					 
						<li><Link to="/about">About JCAC</Link></li>
						<li><Link to="/hall_management">Hall Management</Link></li>
						<li><Link to="/event">Events</Link></li>
						<li><Link to="right-sidebar.html">Achievements</Link></li>
						<li><Link to="no-sidebar.html">Hall Life</Link></li>
					</ul>
				</nav> */}



						{/* <div className="sticky-top"> */}
				<Navbar className="pos-f-t sticky-top" sticky-top  light expand="md">
					{/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
					<NavbarToggler  onClick={this.toggle} />
					<Collapse className="sticky-top center justify-content-center" isOpen={this.state.isOpen} sticky-top navbar>
						<Nav className="m-auto nixie bold_font_weight" justify-content-center navbar sticky-top>
						<NavItem >
								<NavLink className="navBarObjects hoverPink roundedBorder" href="/#">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navBarObjects hoverPink roundedBorder"  href="/#/about">About JCAC</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navBarObjects hoverPink roundedBorder" href="/#/hall_management">Hall Management</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navBarObjects hoverPink roundedBorder" href="/#/event/">Events</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navBarObjects hoverPink roundedBorder" href="/#/event/">Achievements</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navBarObjects hoverPink roundedBorder" href="/#/event/">Hall Life</NavLink>
							</NavItem>


						</Nav>
					</Collapse>
				</Navbar>
				{/* </div> */}


			</div>
		);
	}
}
export default Header;
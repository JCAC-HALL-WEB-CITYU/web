import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./header.scss";
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
			<div className="header" >
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
								<Link className="navBarObjects hoverPink roundedBorder" to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder"  to="/about">About JCAC</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/hall_management">Hall Management</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/event/">Events</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/event/">Achievements</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/facility/">Facility</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/event/">Hall Life</Link>
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
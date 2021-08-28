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
	DropdownItem,

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
				<h1><Link className=" href" to="/">JCAC</Link></h1>
				<h2 className="nixie">Jockey Club Academy Hall</h2>
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
				<Navbar className="pos-f-t sticky-top" sticky-top light expand="md">
					{/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
					<NavbarToggler onClick={this.toggle} />
					<Collapse className="sticky-top center justify-content-center  sticky-top" isOpen={this.state.isOpen} navbar>
						<Nav className="m-auto nixie bold_font_weight justify-content-center  sticky-top" navbar>
							<NavItem >
								<Link className="navBarObjects hoverPink roundedBorder" to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/about">About JCAC</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/hall_management">Hall Management</Link>
							</NavItem>
							<NavItem>
								<a className="navBarObjects hoverPink roundedBorder" href="https://www.cityu.edu.hk/sro/htm/e_policies_hallrules_04.htm" target='_blank'>Hall Rules</a>
							</NavItem>
							<NavItem>
								<a className="navBarObjects hoverPink  dropdown-toggle roundedBorder" data-toggle="dropdown" href="#" role="button" to="/event/">Year Book</a>
								<div className="dropdown-menu dropdownMenu">
									{
										this.props.yearbook.map(
											x => <a className="dropdown-item" href="{x.link}">{x.text}</a>
										)
									}
									<a className="dropdown-item" href="https://jcacweb.github.io/2020YearBook/" target="_blank">Hall Year Book 2020</a>
									<a className="dropdown-item" href="https://jcacweb.github.io/2019YearBook/" target="_blank">Hall Year Book 2019</a>
									<a className="dropdown-item" href="https://firebasestorage.googleapis.com/v0/b/publicity-website.appspot.com/o/yearbook%2FHall%20Book%202018.pdf?alt=media&token=766b752a-393e-4197-921f-bd9138157117" target="_blank">Hall Year Book 2018</a>
								</div>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/facility/">Facilites</Link>
							</NavItem>
							<NavItem>
								<Link className="navBarObjects hoverPink  roundedBorder" to="/event/">Events</Link>
								{/* <a className="navBarObjects hoverPink  dropdown-toggle roundedBorder" data-toggle="dropdown" href="#" role="button" to="/event/">Events</a>
								<div className="dropdown-menu dropdownMenu">
									<Link className="dropdown-item" to="/event/">Events</Link>
									<a className="dropdown-item" href="https://jcacweb.github.io/2020YearBook/" target="_blank">Hall Year Book 2020</a>
									<a className="dropdown-item" href="https://jcacweb.github.io/2019YearBook/" target="_blank">Hall Year Book 2019</a>
								</div> */}
							</NavItem>
							{/* <NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/event/">Achievements</Link>
							</NavItem> */}
							{/* <NavItem>
								<Link className="navBarObjects hoverPink roundedBorder" to="/event/">Hall Life</Link>
							</NavItem> */}
							<NavItem>
								<a className="navBarObjects hoverPink roundedBorder icon fa-facebook" target="_blank" href="https://www.facebook.com/JockeyClubAcademyHall"><span className="label">Facebook</span></a>
								<a className="navBarObjects hoverPink roundedBorder icon fa-instagram" target="_blank" href="https://www.instagram.com/jcac_hall4/"><span className="label">Instagram</span></a>
								{/* <a className="navBarObjects hoverPink roundedBorder" to="/event/">Facebook</a> */}
								{/* <a className="navBarObjects hoverPink roundedBorder" to="/event/">Instagram</a> */}
								{/* <Link className="navBarObjects hoverPink roundedBorder" to="/event/">Hall Life</Link> */}
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
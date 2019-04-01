import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './HallManagement.css';
import Cover from '../../components/cover/cover';
import Header from '../../components/header/header.jsx';
import HallMan from '../../components/hallMan/hallMan.jsx';
import Footer from '../../components/footer/footer';
	
class HallManagement extends Component
{


	render()
	{
		return (
			<div>
				<div className="homepage">
					<div id="page-wrapper">

						<section id="header">

							<Header></Header>
							<Cover coverText={"HALL MANAGEMENT"} imgSrc={"./web/homepage/RT.jpeg"} dontRenderButton={false}></Cover>
						</section>

						<section id="main">
							<HallMan></HallMan>

						</section>

						<Footer></Footer>
					</div></div>
			</div>
		)
	}
}

export default HallManagement;
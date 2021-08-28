import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './EventPage.css';
import Cover from '../../components/cover/cover';
import Header from '../../components/header/header.jsx';
import TwoCard from '../../components/twoCard/TwoCard';
import Footer from '../../components/footer/footer';

class EventPage extends Component
{


	render()
	{
		return (
			<div>
				<div className="homepage">
					<div id="page-wrapper">

						<section id="header">

							<Header yearbook={this.props.yearbook}></Header>
							<Cover coverText={"EVENT @ JCAC"} imgSrc={"./web/aboutJCAC/about.png"} dontRenderButton={false}></Cover>
						</section>
						<TwoCard content={this.props.content}></TwoCard>


						<Footer></Footer>
					</div></div>
			</div>
		)
	}
}

export default EventPage;
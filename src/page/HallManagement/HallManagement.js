import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './HallManagement.css';
import Cover from '../../components/cover/cover';
import Header from '../../components/header/header';
import HallMan from '../../components/hallMan/hallMan';

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

						<section id="footer">
							<div className="container">
								<div className="row">
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>CONTACT INFO</h2>
											</header>
											<p >
												Jockey Club Academy Club Hall (Hall 4), Student Residence,City University of Hong Kong, 22 Cornwall Street, Kowloon Tong,
Kowloon, Hong Kong SAR

											</p>
											<p>香港九龍塘歌和老街22號 香港城市大學
學生宿舍赛马会群智堂 (4座)
</p>
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>FOLLOW US</h2>
											</header>

											<ul className="social">
												<li><a className="icon fa-facebook" href="#"><span className="label">Facebook</span></a></li>
												<li><a className="icon fa-twitter" href="#"><span className="label">Twitter</span></a></li>
												<li><a className="icon fa-dribbble" href="#"><span className="label">Dribbble</span></a></li>
												<li><a className="icon fa-tumblr" href="#"><span className="label">Tumblr</span></a></li>
												<li><a className="icon fa-linkedin" href="#"><span className="label">LinkedIn</span></a></li>
											</ul>
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section >
											<div id="footerImage">
												<img src="./web/homepage/jcaclogo2.png" />
												<img src="./web/homepage/cityu-logo-small-white.png" />
											</div></section>
									</div>
								</div>
							</div>
						</section>
					</div></div>
			</div>
		)
	}
}

export default HallManagement;
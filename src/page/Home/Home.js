import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './style.css';
import Cover from '../../components/cover/cover';
import Part from '../../components/parts/parts';
import SectionCards from '../../components/sectionCards/sectionCards';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class Home extends Component
{


	render()
	{
		return (
			<div>
				<div className="homepage">
				<div id="page-wrapper">

					<section id="header">

				<Header></Header>
						<Cover coverText={"AQUATIC MEET"} imgSrc={"./web/homepage/AQUATIC.png"} dontRenderButton={true}></Cover>
						{/* <div id="banner2"> */}
						{/* <div className="w-100">
							<img className="" src="/web/homepage/AQUATIC.png"/>
							<div className="overlay w-100 h-100"></div> */}
						{/* <img className="overlay" src="/web/homepage/1x/Artboard 1.png"/> */}
						{/* <div>
								
							</div></div> */}
						{/* </div> */}



						<Part></Part>

					</section>

					<section id="main">
						<SectionCards></SectionCards>


					</section>

						{/* <div className="col-12">

							<section>
								<header className="major">
									<h2>The Blog</h2>
								</header>
								<div className="row">
									<div className="col-6 col-12-small">
										<section className="box">
											<a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
											<header>
												<h3>Magna tempus consequat</h3>
												<p>Posted 45 minutes ago</p>
											</header>
											<p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
											<footer>
												<ul className="actions">
													<li><a href="#" className="button icon fa-file-text">Continue Reading</a></li>
													<li><a href="#" className="button alt icon fa-comment">33 comments</a></li>
												</ul>
											</footer>
										</section>
									</div>
									<div className="col-6 col-12-small">
										<section className="box">
											<a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
											<header>
												<h3>Aptent veroeros aliquam</h3>
												<p>Posted 45 minutes ago</p>
											</header>
											<p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit  adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
											<footer>
												<ul className="actions">
													<li><a href="#" className="button icon fa-file-text">Continue Reading</a></li>
													<li><a href="#" className="button alt icon fa-comment">33 comments</a></li>
												</ul>
											</footer>
										</section>
									</div>
								</div>
							</section> 

						 </div> */}
					<Footer></Footer>
				</div></div>
			</div>
		)
	}
}

export default Home;
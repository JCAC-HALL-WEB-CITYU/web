import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './style.css';
import Cover from '../../components/cover/cover';
import Part from '../../components/parts/parts';
import SectionCards from '../../components/sectionCards/sectionCards';
import Header from '../../components/header/header';

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
					<section id="footer">
						<div className="container">
							<div className="row">
								{/* <div className="col-8 col-12-medium">
									<section>
										<header>
											<h2>Blandit nisl adipiscing</h2>
										</header>
										<ul className="dates">
											<li>
												<span className="date">Jan <strong>27</strong></span>
												<h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
												<p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
											</li>
											<li>
												<span className="date">Jan <strong>23</strong></span>
												<h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
												<p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
											</li>
											<li>
												<span className="date">Jan <strong>15</strong></span>
												<h3><a href="#">Magna tempus lorem feugiat</a></h3>
												<p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
											</li>
											<li>
												<span className="date">Jan <strong>12</strong></span>
												<h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
												<p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
											</li>
											<li>
												<span className="date">Jan <strong>10</strong></span>
												<h3><a href="#">Blandit tempus aliquam?</a></h3>
												<p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
											</li>
										</ul>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section>
										<header>
											<h2>What's this all about?</h2>
										</header>
										<a href="#" className="image featured"><img src="images/pic10.jpg" alt="" /></a>
										<p>
											This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
										<a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
										the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
									</p>
										<footer>
											<ul className="actions">
												<li><a href="#" className="button">Find out more</a></li>
											</ul>
										</footer>
									</section>
								</div> */}
								<div className="col-12 col-md-4">
									<section>
										<header>
											<h2>CONTACT INFO</h2>
										</header>
												<p>
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
										<div  id="footerImage">
										<img  src="./web/homepage/jcaclogo2.png"/>
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

export default Home;
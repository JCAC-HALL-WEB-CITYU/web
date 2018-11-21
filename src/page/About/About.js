import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './about.css';
import Cover from '../../components/cover/cover';
import Header from '../../components/header/header';

class About extends Component
{


	render()
	{
		return (
			<div>
				<div className="homepage">
					<div id="page-wrapper">

						<section id="header">

							<Header></Header>
							<Cover coverText={"ABOUT JCAC"} imgSrc={"/web/aboutJCAC/about.png"} dontRenderButton={false}></Cover>
						</section>

						<section id="main">
							<div class="container">

	<article class="box post">
									<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
									<header>
										<h2>No Sidebar</h2>
										<p>Lorem ipsum dolor sit amet feugiat</p>
									</header>
									<p>
										Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
										hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
										Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
										Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
										Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
										hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
										Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
		</p>
									<p>
										Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl,
										a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
										placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
										eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
										elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
		</p>
									<section>
										<header>
											<h3>Something else</h3>
										</header>
										<p>
											Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
											placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
											eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
											elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
											sit amet nullam consequat feugiat dolore tempus.
											Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
											placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
											eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
											elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
			</p>
										<p>
											Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
											eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
											elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
											sit amet nullam consequat feugiat dolore tempus.
			</p>
									</section>
									<section>
										<header>
											<h3>So in conclusion ...</h3>
										</header>
										<p>
											Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
											eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
											elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
											sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
											Maecenas sagittis convallis justo vel mattis.
			</p>
									</section>
								</article>

							</div>

						</section>

						<section id="footer">
							<div className="container">
								<div className="row">
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
											<div id="footerImage">
												<img src="web/homepage/jcaclogo2.png" />
												<img src="web/homepage/cityu-logo-small-white.png" />
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

export default About;
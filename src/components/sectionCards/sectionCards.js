import React, { Component } from "react";
import "./sectionCards.css";


class SectionCards extends React.Component
{
	render()
	{
		return (
			<div>
				<div className="container">
					{/* <div className="row">
						<div className="col-12"> */}

							<section>
								<header className="major">
									<h2>NEWS</h2>
								</header>
								<div className="row">
									<div className="noPadding p-sm-2 p-0 pb-3 col-lg-4 col-md-6 col-12">
											<a href="#" id="cardsImage" className="image featuring2">
											<img src="./web/homepage/MAC.png" alt="" />
											</a>
										<section className="box whiteBG">
											<header>
												<h3>M.A.C. NIGHT</h3>
											</header>
											<p>To embrace the robust Residential Year 2018/19, Student Residence Office (SRO) is pleased to join hands with Chair Prof. Ben LEUNG, Residence Master (RM)...</p>
											<footer>
												<ul className="actions">
													<li><a href="#" className="button alt">READ MORE</a></li>
												</ul>
											</footer>
										</section>
									</div>
									<div className="noPadding p-sm-2 p-0 pb-3 col-lg-4 col-md-6 col-12">
									<a href="#" id="cardsImage" className="image featuring2"><img src="./web/homepage/SOCCER.png" alt="" /></a>
										<section className="box whiteBG">
											
											<header>
												<h3>PEK SOCCER</h3>
											</header>
											<p>We, JCAC Soccer Team, won Hall 11 Soccer Team with a final score of 15-0! That’s true, it is not a typo, it is 15:0! Our team players have done an excellent job...</p>
											<footer>
												<ul className="actions">
													<li><a href="#" className="button alt">READ MORE</a></li>
												</ul>
											</footer>
										</section>
									</div>
									<div className="noPadding p-sm-2 p-0 pb-3 col-lg-4 col-md-6 col-12">
											<a href="#" id="cardsImage" className="image featuring2"><img src="./web/homepage/ATHLETIC.png" alt="" /></a>
										<section className="box whiteBG">
											<header>
												<h3>PEK ATHLETIC</h3>
											</header>
											<p>CityU Athletic Meet was approaching. It was a perfect time to show our great enthusiasm fighting for hall 4. On 14th October, we gathered at the joint sports center...</p>
											<footer>
												<ul className="actions">
													<li><a href="#" className="button alt">READ MORE</a></li>
												</ul>
											</footer>
										</section>
									</div>
								</div>
							</section>

						{/* </div>
					</div> */}
				</div>
				<footer className="container">
					<ul className="actions">
						<li><a id="ABCCulture" href="#" className="button large">MORE NEWS</a></li>
						{/* <li><a href="#" className="button alt large">Learn More</a></li> */}
					</ul>
				</footer>
			</div>
		);
	}
}
export default SectionCards;
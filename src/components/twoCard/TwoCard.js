import React, { Component } from "react";
import "./TwoCard.css";

class TwoCard extends React.Component
{
	render()
	{
		return (

			<div className="whiteBG2 box">
				<div className="container ">
					<div className="row margin-top">
						<div className="col-12 p-0">

							<section >
								<div className="row">
									<div className="col-sm-6 p-0 pr-sm-2 pb-sm-2 col-12 flexDown">
											<a href="#" className="image featuring"><img src="./web/homepage/integrationTrip.jpg" alt="" /></a>
										<section className="box no-box">
											<header>
												<h3>Integration Trip</h3>
												<p>1 December</p>
											</header>
											<p>Academians went to Cheung Chau Island for integration trip. Bathed in warm sunlight and feeling cool wind, Academians left for Cheung Chau Island with happiness and comfort. During the trip, the atmosphere was easy and pleasant.</p>
											<footer>
												<ul className="actions">
													<li><a target="_blank" href="https://mp.weixin.qq.com/s/7MDp0WnnCVX_Ux-SBhepLg" className="button icon fa-file-text">Continue Reading</a></li>
													{/* <li><a href="#" className="button alt icon fa-comment">33 comments</a></li> */}
												</ul>
											</footer>
										</section>
									</div>
									<div className="col-sm-6 p-0 pl-sm-2 pb-sm-2 col-12 flexDown">
											<a href="#" className="image featuring"><img src="./web/homepage/MAC.png" alt="" /></a>
										<section className="box no-box">
											<header>
												<h3>Meet-And-Chat Night</h3>
												<p>1 November</p>
											</header>
											<p>On the evening of November 1st with the cool Autumn wind, residents of Hall 4 gathered together at Multi-function HallB, participating in Meet-And-Chat Night hold by SRO and Hall 4. In the beginning, the Residence Master of Hall 4, Prof. Ben Leung delivered opening remarks and warm welcomes to participants. Then the Director of SRO, Mr. Wilson Lam shared colorful residence life with humor.</p>
											<footer>
												<ul className="actions">
													<li><a target="_blank" href="https://mp.weixin.qq.com/s/ZJDl2b36pg_GmotgTJggLQ" className="button icon fa-file-text">Continue Reading</a></li>
													{/* <li><a href="#" className="button alt icon fa-comment">33 comments</a></li> */}
												</ul>
											</footer>
										</section>
									</div>
								</div>
							</section>

						</div>
					</div>
					<div className="row margin-top">
						<div className="col-12 p-0">

							<section>
								<div className="row">
									<div className="col-sm-6 p-0 pr-sm-2 pb-sm-2 col-12 flexDown">
											<a href="#" className="image featuring"><img src="./web/homepage/SOCCER.png" alt="" /></a>
										<section className="box no-box">
											<header>
												<h3>PEK Soccer</h3>
												<p>24 November</p>
											</header>
											<p>Here is PEK soccer final for the second runner-up. Hall 4 drew 3:3 with Hall 1 during regular time and entered the penalty shootout. Our goalkeeper Andy saved a penalty with excellent performance!</p>
											<footer>
												<ul className="actions">
													<li><a target="_blank" href="https://mp.weixin.qq.com/s/dOjWc5193zvvp6E324aPFg" className="button icon fa-file-text">Continue Reading</a></li>
													{/* <li><a href="#" className="button alt icon fa-comment">33 comments</a></li> */}
												</ul>
											</footer>
										</section>
									</div>
									<div className="col-sm-6 p-0 pl-sm-2 pb-sm-2 col-12 flexDown">
											<a href="#" className="image featuring tempImageFix"><img  src="./web/homepage/AQUATIC.png" alt="" /></a>
										<section className="box no-box">
											<header>
												<h3>PEK Aquatic</h3>
												<p>6 October</p>
											</header>
											<p>PEK Aquatic Meeting was held in CityU swimming pool on Oct 6th. Academians were all in red T-shirts, proudly cheering for our 12 swimmers. During the competition, Hall 4 players swam as fast as sailing boats with the tailwind, presenting an excellent performance for us.</p>
											<footer>
												<ul className="actions">
													<li><a target="_blank" href="https://mp.weixin.qq.com/s/ZdTJF2iJLlwYksYC-G8bww" className="button icon fa-file-text">Continue Reading</a></li>
													{/* <li><a href="#" className="button alt icon fa-comment">33 comments</a></li> */}
												</ul>
											</footer>
										</section>
									</div>
								</div>
							</section>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default TwoCard;
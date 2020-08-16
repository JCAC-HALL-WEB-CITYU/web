import React, { Component } from "react";
import "./hallMan.scss";

class HallMan extends React.Component
{
	render()
	{
		return (

			<div className="whiteBG2 box HallMan">


				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-12 ">
							<h2 className="col-12">HALL MASTER</h2>
							<img className="" src="./web/homepage/tutor_photo/Ben.JPG" />
							<h3 className="col-12">Prof. Ben LEUNG</h3>
							<div className="parentP">
								<p>
									Welcome to our JCAC (Jockey Club Academy Hall) big family of Academians! Here you will meet our fellow students with diverse background from different disciplines and countries. This is a good place for you to enlarge your social circle and make more friends. Enjoy your life here!
												</p></div>
						</div>

						<div className="col-lg-8 col-12">
							<h2 className="col-12">RESIDENCE TUTORS</h2>
							<div className="col-12 container">
								<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Eugene.jpg" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>101B</span> / Eugene</div></div>
											<div className="info"><b>1/F</b> | Hall Book, PEK Soccer Competition, Cooking Competition, MAC Night</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Sherry.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Sherry \ <span>301A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR"><b>2,3/F</b> | Advocacy | Liason, PEK Athletic Relay, Welcoming Reception</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Naeem1.jpg" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>401B</span> / Naeem</div></div>
											<div className="info"><b>4/F</b> | Senior RT, Hall Discipline, PEK Photography, Integration Trip</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Amir.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Amir \ <span>501A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR"><b>5/F</b> | Finance, PEK  Tug-of-War, Mid-autumn Festival, Q&A Competition</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/victor.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>701B</span> / Victor</div></div>
											<div className="info"><b>6,7/F</b> | PEK Hall Coordinator, PEK Basketball Competition, Welcoming Reception, SRO Liason</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Celine.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Celine \ <span>901A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR"><b>8,9/F</b> | Secretary, PEK Sing Con, Floor Decoration</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Alex.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>1001B</span> / Alex</div></div>
											<div className="info"><b>10/F</b> | Returning, Scholarship, PEK Table tennis, Academians' Talk, MAC Night</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Sophie.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Sophie \ <span>1101A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR"><b>11/F</b> | Facilities, Spring Festival, PEK Rowing, Food Journey, Q&A Competition</div>
										</div>
									</div>
									</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default HallMan;

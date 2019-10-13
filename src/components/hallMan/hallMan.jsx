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
							<h2 className="col-12">RESIDENCE TUTOR</h2>
							<div className="col-12 container">
								<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Eugene.jpg" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>101B</span> / Eugene</div></div>
											<div className="info">Hall Book, PEK Soccer Competition, SR Mid-Autumn</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Alex.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Alex \ <span>301A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">Returning Scheme, Hall Scholarship, PEK Singing, Floor Decoration</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Naeem.jpg" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>401B</span> / Naeem</div></div>
											<div className="info">Hall Discipline, PEK Photography, Integration Trip</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Andrew.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Andrew \ <span>501A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">RT(Advocacy), PEK Tug-of-War, RA Liaison, Q&A Competition</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/victor.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>701B</span> / Victor</div></div>
											<div className="info">PEK Basketball Competition, PEK Hall Coordinator, Food Journey</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Chriss.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Chriss \ <span>901A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Athletic Relay, Secretary, SR Spring Festival</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/CK.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>1001B</span> / CK</div></div>
											<div className="info">PEK Aquatic Relay, Senior RT, Finance, Academians' Talk, SRO Liaison</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/SzeSze.jpg" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">SzeSze \ <span>1101A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Table-Tennis, Hall Facilities, Cooking Competition</div>
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

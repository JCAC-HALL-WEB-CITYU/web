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
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Lucas.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>101B</span> / Lucas</div></div>
											<div className="info">PEK Soccer Competition<br/>Returning Scheme</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Naeem.JPEG" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Naeem \ <span>201A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Photography Competition<br/>Discipline</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Sherry.jpeg" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>301A</span> / Sherry</div></div>
											<div className="info">PEK Athletic Meet<br/> Activity Coordinator</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/jiwon.JPG" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Jiwon \ <span>501A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Singing Competition<br/>Hall  Book Coordinator<br/>RA/SRO Liaison</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/victor.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>701B</span> / Victor</div></div>
											<div className="info">PEK Basketball Competition<br/>PEK Hall Coordinator</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Chriss.JPEG" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Chriss \ <span>901A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Tennis Competition, Secretary</div>
										</div>
									</div>
									</div>
									<div className="row" id="RTimg">
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center flex-row-reverse pr-1 ">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/CK.JPG" alt="" />
										<div className="RTinfo">
											<div className="w-100"><div className="triangle"></div><div className="title"><span>1001B</span> / CK</div></div>
											<div className="info">PEK Table Tennis Competition, Senior RT, Finance</div>
										</div>
									</div>
									<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
									
										<img className="RTimg" src="./web/homepage/tutor_photo/Suzy.JPG" alt="" />
										<div className="RTinfo RTinfoR">
											<div className="w-100 ">
											
											<div className="title titleR">Suzy \ <span>1101A</span></div><div className="triangle triangleR"></div></div>
											<div className="info infoR">PEK Aquatic Meet, Hall Facilities, Hall Publicity</div>
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
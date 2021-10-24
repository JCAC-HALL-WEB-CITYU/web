import React, { Component, useEffect } from "react";
import "./hallMan.scss";

const HallMan = () => {
	const peopleInfo = [
		{
			name:"Chester",
			room: "101B",
			floor: "1,2/F",
			duties: "PEK - Soccer, Hall book,  Cooking Competition, MAC Night (Sem A)",
			photo: "Chester.jpg",
			position: "left"
		},
		{
			name:"Beryl",
			room: "301A",
			floor: "3/F",
			duties:	"PEK - Table tennis, Academians' Talk, MAC Night (Sem B), Farewell Party (Sem B)",
			photo: "Yumeng.JPG",
			position: "right"
		},
		{
			name:"Kenny",
			room: "401B",
			floor: "4/F",
			duties: "PEK -  Basketball, Common Room Cleaniness Competition (Sem A)",
			photo: "Kenny.jpg",
			position: "left"
		},
		{
			name:"Amir",
			room: "501A",
			floor: "5/F",
			duties: "PEK- Crate climbing, Welcoming Reception (Sem B), Q&A Competition (competition day)",
			photo: "Amir.jpg",
			position: "right"
		},
		{
			name:"Carlos",
			room: "701B",
			floor: "6,7/F",
			duties: "PEK - Photography, Integration Trip, Common Room Cleaniness Competition (Sem B)",
			photo: "Carlos.jpg",
			position: "left"
		},
		{
			name:"Celine",
			room: "901A",
			floor: "8,9/F",
			duties: "Hall Secretary, PEK - Sing Con, Door Decoration",
			photo: "Celine.jpg",
			position: "right"
		},
		{
			name:"Jasmine",
			room: "1001B",
			floor: "10/F",
			duties: "PEK - Athletic Meet, Farewell Party (Sem A),  Q&A Competition (preparation), RA Liason",
			photo: "Jasmine.jpg",
			position: "left"
		},
		{
			name:"Aruna",
			room: "1101A",
			floor: "11/F",
			duties: "PEK - badminton, Food Journey, 1-min Video Competition (Sem A)",
			photo: "Aruna.jpg",
			position: "right"
		},
	];

	const peopleComp = (props) =>{
		const peopleCompLeft = ({ name, room, floor, duties, photo }) => {
			return (
				<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 flex-row-reverse">
					<img
						className="RTimg"
						src={`./web/homepage/tutor_photo/${photo}`}
						alt={photo}
					/>
					<div className="RTinfo">
						<div className="w-100">
						<div className="triangle"></div>
						<div className="title">
							<span>{floor}</span> / {name}
						</div>
						</div>
						<div className="info">
						<b>{room}</b> | {duties}
						</div>
					</div>
				</div>
			)
		};
		const peopleCompRight = ({ name, room, floor, duties, photo }) => {
			return (
				<div className="col-md-6 col-12 p-0 m-0 my-auto d-flex justify-content-md-start justify-content-center pr-1 goDown">
					<img
						className="RTimg"
						src={`./web/homepage/tutor_photo/${photo}`}
						alt={photo}
					/>
					<div className="RTinfo RTinfoR">
						<div className="w-100 ">
						<div className="title titleR">
							{name} \ <span>{floor}</span>
						</div>
						<div className="triangle triangleR"></div>
						</div>
						<div className="info infoR">
							<b>{room}</b> | {duties}
						</div>
					</div>
				</div>
			)
		};
		if (props.position === "left") {
			return peopleCompLeft(props)
		} else {
			return peopleCompRight(props)
		}
	};
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
						Welcome to our Jockey Club Academy Hall (JCAC) big family of
						Academians! Here you will meet our fellow residents with
						diverse background from different disciplines and countries.
						This is a good place for you to enlarge your social circle and
						make more friends. Enjoy your life here!
					</p>
					</div>
				</div>
	
				<div className="col-lg-8 col-12">
					<h2 className="col-12">RESIDENCE TUTORS</h2>
					<div className="col-12 container">
					<div className="row" id="RTimg">
						{peopleComp(peopleInfo[0])}
						{peopleComp(peopleInfo[1])}
					</div>
					<div className="row" id="RTimg">
						{peopleComp(peopleInfo[2])}
						{peopleComp(peopleInfo[3])}
					</div>
					<div className="row" id="RTimg">
						{peopleComp(peopleInfo[4])}
						{peopleComp(peopleInfo[5])}
					</div>
					<div className="row" id="RTimg">
						{peopleComp(peopleInfo[6])}
						{peopleComp(peopleInfo[7])}
					</div>
					</div>
					<div></div>
				</div>
				</div>
			</div>
		</div>
	)
}
export default HallMan;

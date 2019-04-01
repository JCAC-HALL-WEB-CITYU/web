import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./sectionCards.css";
import MyCard from "../card/card";

class SectionCards extends React.Component
{

	render()
	{
		console.log(this.props);
		let content ;
		if (this.props.content){
			content = this.props.content.map(
				(d) => <MyCard 
					title={ d.title}
					shortPara= {d.shortPara}
					splashImage={ d.splashImage}
					link ={d.link}>
				</MyCard>
			);

		}
		var original = <div>
			<div className="container">
				{/* <div className="row">
				<div className="col-12"> */}

				<section>
					<header className="major">
						<h2>NEWS</h2>
					</header>
					<div className="row justify-content-between">
						{content}
					</div>
				</section>

				{/* </div>
			</div> */}
			</div>
			<footer className="container">
				<ul className="actions">
					<li><Link id="ABCCulture" to="/event" className="button large">MORE NEWS</Link></li>
					{/* <li><a href="#" className="button alt large">Learn More</a></li> */}
				</ul>
			</footer>
		</div>;

		return (
			original
		);
	}
}
export default SectionCards;
import React, { Component } from "react";
import "./eventCard.scss";


class EventCard extends React.Component
{
	render()
	{
		return (
			<div className="col-sm-6 p-0 pr-sm-2 pb-sm-2 col-12 flexDown">
				<a href="#" className="image featuring"><img src={this.props.splashImage} alt="" /></a>
				<section className="box no-box">
					<header>
						<h3>{this.props.title}</h3>
						<p>{this.props.date}</p>
					</header>
					<p>{this.props.para}</p>
					<footer>
						<ul className="actions">
							<li><a target="_blank" href={this.props.link} className="button icon fa-file-text">Continue Reading</a></li>
							{/* <li><a href="#" className="button alt icon fa-comment">33 comments</a></li> */}
						</ul>
					</footer>
				</section>
			</div>
		);
	}
}
export default EventCard;
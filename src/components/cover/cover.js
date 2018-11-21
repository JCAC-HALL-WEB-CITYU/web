import React, { Component } from "react";
import "./cover.css";

const styles = {

}

class Cover extends React.Component
{
	render()
	{
		return (
			<div >
				<div className="fitContent" >
				<div className="overlay"></div>
				<img className="landing blur" src="/web/homepage/AQUATIC.png" />
				<div className="container">
				<h1 className="leftBottomSide">
					Aquatic<br/>
					Meet
				</h1>
				<img className="landing" src="/web/homepage/AQUATIC.png" />
					<button className="exploreMoreButton">
						Explore More
				</button></div>
					</div>
			</div>
		);
	}
}
export default Cover;
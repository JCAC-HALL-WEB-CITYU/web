import React, { Component } from "react";
import "./cover.scss";

const styles = {

}

class Cover extends React.Component
{
	render()
	{
		let splitedText = [];
		if (this.props.coverText){

			splitedText = this.props.coverText.split(" ");
			console.log(splitedText);
		}
		return (
			<div >
				<div className="fitContent" >
				<div className="overlay"></div>
				<img className="landing blur" src={this.props.imgSrc} />
				<div className="container">
				<h1 className="leftBottomSide">
				{splitedText.map(function(o){
        return <div >{o}</div>;
    })}
				</h1>
				<img className="landing" src={this.props.imgSrc} />
					{this.props.dontRenderButton && <a className="exploreMoreButton">
						Explore More
				</a>}
				</div>
					</div>
			</div>
		);
	}
}
export default Cover;
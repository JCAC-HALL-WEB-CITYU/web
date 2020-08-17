import React, { Component } from "react";
import "./carousel.scss";
import $ from 'jquery';
const styles = {

}

class Carousel extends React.Component
{
	componentDidMount(){

		$('.carousel').carousel({
			interval: 5000
		})

		
	}

	clickerPrev(){
		$('.carousel').carousel('prev')
	}
	clickerNext(){
		$('.carousel').carousel('next')
	}
	render()
	{
		if (this.props.content.length){

		let splitedText = [];
		for (let content of this.props.content){
			if (content.title)
			{
	
				splitedText.push(content.title.split(" "));
				// console.log(splitedText);
			}
		}

		return (

			<div >
				<div id="carousel" className="carousel slide" data-ride="carousel">
					{/* <ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol> */}

					<div className="carousel-inner">

						<div className="carousel-item active">


							<div className="fitContent" >
								<div className="overlay"></div>
								<img className="landing blur" src={this.props.content[0].splashImage} />
								<div className="container">
									<h1 className="leftBottomSide">
										{splitedText[0].map(function (o)
										{
											return <div >{o}</div>;
										})}
									</h1>
									<img className="landing" src={this.props.content[0].splashImage} />
									{this.props.content[0].link && <a href={this.props.content[0].link} target="_blank" className="exploreMoreButton">
										Explore More
				</a>}
								</div>
							</div>
						


						</div>
						<div className="carousel-item">



							<div className="fitContent" >
								<div className="overlay"></div>
								<img className="landing blur" src={this.props.content[1].splashImage} />
								<div className="container">
									<h1 className="leftBottomSide">
										{splitedText[1].map(function (o)
										{
											return <div >{o}</div>;
										})}
									</h1>
									<img className="landing" src={this.props.content[1].splashImage} />
									{this.props.content[1].link && <a href={this.props.content[1].link} target="_blank" className="exploreMoreButton">
										Explore More
				</a>}
								</div>
							</div>

						



						</div>
						<div className="carousel-item">

							<div className="fitContent" >
								<div className="overlay"></div>
								<img className="landing blur" src={this.props.content[2].splashImage} />
								<div className="container">
									<h1 className="leftBottomSide">
										{splitedText[2].map(function (o)
										{
											return <div >{o}</div>;
										})}
									</h1>
									<img className="landing" src={this.props.content[2].splashImage} />
									{this.props.content[2].link && <a href={this.props.content[2].link} target="_blank" className="exploreMoreButton">
										Explore More
				</a>}
								</div>
							</div>

						


						</div>
						<div className="carousel-item">

							<div className="fitContent" >
								<div className="overlay"></div>
								<img className="landing blur" src={this.props.content[3].splashImage} />
								<div className="container">
									<h1 className="leftBottomSide">
										{splitedText[3].map(function (o)
										{
											return <div >{o}</div>;
										})}
									</h1>
									<img className="landing" src={this.props.content[3].splashImage} />
									{this.props.content[3].link && <a href={this.props.content[3].link} target="_blank" className="exploreMoreButton">
										Explore More
				</a>}
								</div>
							</div>

						


						</div>
					</div>
					<a className="carousel-control-prev"  role="button" data-slide="prev" onClick={this.clickerPrev}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" role="button" data-slide="next" onClick={this.clickerNext}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
					
				</div>


			</div>
		);
	}
	else{
		return (<div></div>);
	}
	}
}
export default Carousel;
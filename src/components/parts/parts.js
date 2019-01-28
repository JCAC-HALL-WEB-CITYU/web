import React, { Component } from "react";
import "./parts.css";


class Part extends React.Component
{
	render()
	{
		return (
			<div >
				
				<section id="intro" id="top-margin" className="container">
							<div className="row fitWidth" id="top-margin">
								<div className="col-4 col-12-medium">
									<section className="first">
										<i className="icon featured fa-search"></i>
										<header>
											<h2>Academic Excellence</h2>
										</header>
										{/* <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p> */}
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="middle">
										<i className="icon featured alt  fa-trophy"></i>
										<header>
											<h2>Balanced Development</h2>
										</header>
										{/* <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p> */}
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="last">
										<i className="icon featured alt2 fa-handshake-o"></i>
										<header>
											<h2>Community Citizenship</h2>
										</header>
										{/* <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p> */}
									</section>
								</div>
							</div>
							<footer>
								<ul className="actions">
									<li><a id="ABCCulture" href="#" className="button large">About ABC Culture</a></li>
									{/* <li><a href="#" className="button alt large">Learn More</a></li> */}
								</ul>
							</footer>
						</section>
			</div>
		);
	}
}
export default Part;
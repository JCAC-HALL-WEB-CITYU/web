import React, { Component } from "react";
import "./footer.scss";

const styles = {

}

class Footer extends React.Component
{
	render()
	{
		let splitedText = [];
		if (this.props.coverText){

			splitedText = this.props.coverText.split(" ");
			console.log(splitedText);
		}
		return (
			<section id="footer">
							<div className="container">
								<div className="row">
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>CONTACT INFO</h2>
											</header>
											<p >
												Jockey Club Academy Hall (Hall 4), Student Residence, City University of Hong Kong, 22 Cornwall Street, Kowloon, Hong Kong SAR</p>
											<p>香 港 九 龍 塘 歌 和 老 街 22 號  香 港 城 市 大 學 學 生 宿 舍 賽 馬 會 群 智 堂 (4 座)</p>
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>FOLLOW US</h2>
											</header>

											<ul className="social mb-0">
												{/* <li><a className="icon fa-twitter" target="_blank" href="https://twitter.com/cityuhongkong"><span className="label">Twitter</span></a></li> */}
												<li><a className="icon fa-facebook" target="_blank" href="https://www.facebook.com/JockeyClubAcademyHall"><span className="label">Facebook</span></a></li>
												<li><a className="icon fa-instagram" target="_blank" href="https://www.instagram.com/jcac_hall4/"><span className="label">Instagram</span></a></li>
												{/* <li><a className="icon fa-youtube" target="_blank" href="https://www.youtube.com/user/cityujcac"><span className="label">Youtube</span></a></li> */}
												{/* <li><a className="icon fa-weixin d-visible d-sm-none" target="_blank" href="https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=https%3A%2F%2Fmp.weixin.qq.com%2Fmp%2Fprofile_ext%3Faction%3Dhome%26__biz%3DMzU5MjcxNjE2OA%3D%3D"><span className="label">WeChat</span></a></li> */}
											</ul>
											{/* <p>We chat please scan with WeChat QR Scanner</p> */}
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section >
											<div id="footerImage">
												<img src="./web/homepage/jcaclogo2.png" />
												<img src="./web/homepage/cityu-logo-small-white.png" />
											</div></section>
									</div>
								</div>
							</div>
						</section>

		);
	}
}
export default Footer;
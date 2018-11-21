import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './../../style/main.css';
import './about.css';
import Cover from '../../components/cover/cover';
import Header from '../../components/header/header';

class About extends Component
{


	render()
	{
		return (
			<div>
				<div className="homepage">
					<div id="page-wrapper">

						<section id="header">

							<Header></Header>
							<Cover coverText={"ABOUT JCAC"} imgSrc={"/web/aboutJCAC/about.png"} dontRenderButton={false}></Cover>
						</section>

						<section id="main">
							<div class="container">

								<article class="box post">
									<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
									<section>
									<header className="text-left">
										<h2>INTRODUCTION</h2>
									</header>
									<p className="text-justify">
										Opened on March 15, 2004, Jockey Club Academy Hall (JCAC) has quickly ascended to be one of the most dynamic halls in City University of Hong Kong. It embraces the whole-person education ideal of the University, offering students a balanced life and an extension of learning beyond the classroom.
		</p>
									<p className="text-justify">
										Students' intellectual development and self-governance are encouraged by the free and energetic ambience of the Hall, as exemplified by the quick formation of the Provisional Residents' Association (PRA) in November 2004 and the inauguration of the First Residents' Association (RA) in November 2005. The RA manages the Hall facilities and organizes activities for the Academians including high table dinners, arts and cultural programmes, community services, sports events and various interest groups. There are also 11 Floor Committees that help to promote the active participation of residents in hall life.
		</p>
									<p className="text-justify">The beauty of JCAC not only resides in its panoramic view overlooking the Kowloon Peninsula, but above all in the people who live and learn together as an integral part of a cheerful, energetic and caring community.</p>
									</section>
<section>
										{/* <header className="text-left"> */}
											<h3 className="text-left">Activities and Residents’ Involvement</h3>
										{/* </header> */}
										<p className="text-justify">
											To enrich residents’ learning experiences outside the classroom, the Residence Tutors (RTs) and the Residents’ Association (RA) organize about over 20 hall activities every year, on top of activities organized within each floor. These activities widely cover cultural exchanges, community services, inter-hall competitions, career, and academic development.
			</p>
										{/* <header className="text-left"> */}
											<h3 className="text-left">Unity and Sense of Belonging</h3>
										{/* </header> */}</section>
<section>
										<p className="text-justify">
											What’s more, JCAC RA has the longest history amongst those of all CityU halls, and it is an autonomous association run by the residents.
	“Academian” is an identity to be proud of. Submerged in its caring and family-like environment at JCAC, Academians are united and have a strong sense of belonging to the hall. The strong spirit has led us into winning the Best Cheering Hall prizes in almost every inter-hall cheering competitions over the past few years.

			</p>
			
									</section>
									<section>
										{/* <header className="text-left"> */}
											<h3 className="text-left">Location and Facilities</h3>
										{/* </header> */}

										<p className="text-justify">
											JCAC enjoys the geographical advantage of being the hall that lies closest to the campus. With Beacon Hill behind, the hall has a panoramic vista of Kowloon Peninsula and Hong Kong Island. It is equipped with a Gym Room, Pool Table, video game set, and other hall facilities. The RTs manage the facilities and maintain them to best suit residents’ needs.

			</p>
			</section>
									<section>
										<header className="text-left">
											<h2>ABC CULTURE</h2>
										</header>
										<p className="text-justify">
											“A”  stands for Academic Excellence. To live up to the name of our hall, Academians are encouraged to be serious about their studies and strive for academic excellence. Our Residence Tutors (RTs), who have all been successful in their undergraduate studies, stand ready to give you advice and guidance in this aspect apart from taking care of you. You are welcome to talk to them, e-mail them or make appointments with them for personal consultation. They all have a name poster on their room doors for your easy identification.
	
	
			</p>
										<p className="text-justify">
											
	“B” is the acronym for Balanced Development. JC Academy Hall embraces the whole-person education ideal of the Univeristy through offering you a wealth of opportunites for learning outside the classroom. The Residents' Association is committed, and has been doing a great job, in organizing a broad range of programmes to cultivate Academians' interests and developments in arts and culture, sports and social concern. So, apart from studying, do watch out for and take advantage of the various activities brought to you by the hall for a balanced life and self-enhancement.
			</p>
										<p className="text-justify">
											“C”is for Community Citizenship. Academians are living in a community characterised by a diversity of people, ideas and lifestyles. Furthermore, over 90% of you are staying in shared rooms where your living habits may be quite different from those of your roommates. To ensure the enjoyment of a safe, healthy, secure and harmonious living environment for all Academians, it is important that every one of us act as a good, responsible and mature citizen of the Academian living community, with a strong sense of respect and consideration for others.
			</p>
									</section>
									<section>
										<header className="text-left">
											<h2>Scholarship</h2>
										</header>
										<p className="text-justify">
										Jockey Club Academy Hall (Hall 4) Academian Scholarships
Jockey Club Academy Hall is committed to whole-person education. To recognize residents’ outstanding pursuit of the Academian culture, i.e. Academic Excellence, Balanced Development and Community Citizenship, a scholarship scheme has been established.

			</p>
									</section>
									<section>
										<header className="text-left">
											<h2>Hall Rules</h2>
										</header>
										<p className="text-justify">
										Far beyond a mere place to stay, hall residence is an important component of the whole-person education offered by City University of Hong Kong. Being exposed to a diversity of individuals, ideas and lifestyles, residents in Jockey Club Academy Hall have ample opportunities to gain out-of-classroom experiences which are as valuable as academic achievements. At the same time, they are expected to observe the "Regulations Governing Student Residence" and the "Code of Student Conduct and Disciplinary Procedure" of the University in order to maintain a secure, healthy and pleasant environment for all personnel in the Hall.
			</p>
			<p className="text-justify">
			The following Hall Rules and Regulations are also set to maintain a due standard and to state the relevant procedures. The spirit is not to sanction but to instil a sense of responsibility and maturity in residents of the Hall to develop a harmonious community. Residents' understanding and cooperation are essential to make Jockey Club Academy Hall the best place to live in and study.
			</p>
									</section>
								</article>

							</div>

						</section>

						<section id="footer">
							<div className="container">
								<div className="row">
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>CONTACT INFO</h2>
											</header>
											<p >
												Jockey Club Academy Club Hall (Hall 4), Student Residence,City University of Hong Kong, 22 Cornwall Street, Kowloon Tong,
Kowloon, Hong Kong SAR

											</p>
											<p>香港九龍塘歌和老街22號 香港城市大學
學生宿舍赛马会群智堂 (4座)
</p>
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section>
											<header>
												<h2>FOLLOW US</h2>
											</header>

											<ul className="social">
												<li><a className="icon fa-facebook" href="#"><span className="label">Facebook</span></a></li>
												<li><a className="icon fa-twitter" href="#"><span className="label">Twitter</span></a></li>
												<li><a className="icon fa-dribbble" href="#"><span className="label">Dribbble</span></a></li>
												<li><a className="icon fa-tumblr" href="#"><span className="label">Tumblr</span></a></li>
												<li><a className="icon fa-linkedin" href="#"><span className="label">LinkedIn</span></a></li>
											</ul>
										</section>
									</div>
									<div className="col-12 col-md-4">
										<section >
											<div id="footerImage">
												<img src="web/homepage/jcaclogo2.png" />
												<img src="web/homepage/cityu-logo-small-white.png" />
											</div></section>
									</div>
								</div>
							</div>
						</section>
					</div></div>
			</div>
		)
	}
}

export default About;
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/picture/picture.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import Home from './page/Home/Home';
import About from './page/About/About';
import EventPage from './page/EventPage/EventPage';
import HallManagement from './page/HallManagement/HallManagement';
import { Helmet } from 'react-helmet';
import Facility from './page/Facility/facility';

var firebase = require("firebase/app");

require("firebase/database");

const config = {
    apiKey: "AIzaSyDgI8OjrtxgyX77EVzFt4zOG4U126KkHe8",
    authDomain: "publicity-website.firebaseapp.com",
    databaseURL: "https://publicity-website.firebaseio.com",
    projectId: "publicity-website",
    storageBucket: "publicity-website.appspot.com",
    messagingSenderId: "707102373919"
  };

firebase.initializeApp(config);

class App extends Component
{
    constructor(){
        super();
        this.state = {
            content:[],
            contentForEvent:[],
            facility: [],
            yearbook: [],
        }
        let database = firebase.database();
        
        let content = [
            {
                "link": "https://mp.weixin.qq.com/s/vReemIdfCFJ7djOM1ZHF_A",
                "shortPara": "PEK Cup Inter-hall Table Tennis Competition was held on 13 November 2021 (Sat) in Moon Chun Multi-function Hall (MFH-A) and Multi-function Hall C (MFH-C) in Hall area.",
                "splashImage": "./web/homepage/news/pek_table_tennis_2122.jpg",
                "title": "PEK Table Tennis Competition 2021"
            }, 
            {
                "link": "https://mp.weixin.qq.com/s/vReemIdfCFJ7djOM1ZHF_A",
                "shortPara": "On October 17, PEK 4*100M Inter Hall Relay was held at the Joint Sports Center. I am proud to announce that our Hall 4 representative team achieved marvellous results in this race.",
                "splashImage": "./web/homepage/news/pek_4x100_2122.jpg",
                "title": "PEK 4*100m Inter-hall Relay"
            }, 
            {
                "link": "https://mp.weixin.qq.com/s/MIxryKADWB5S96Z6rUBimA",
                "shortPara": "At the beginning of the new semester, our hall held Door Board Decoration Competition with the theme of “H4ppiness”.",
                "splashImage": "./web/homepage/news/decoration_2122.jpg",
                "title": "Door Board Decoration 2021/22"
            }, 
            {
                "link": "https://mp.weixin.qq.com/s/ImiyNKaGqpk8-EfEVlf5eA",
                "shortPara": "Food is always associated with a specific culture and represented as a characteristic style of cooking practices and traditions. Our hall proudly presents ‘Food Journey’, which is a cultural exchange activity allowing residents to know more about food culture in other countries.",
                "splashImage": "./web/homepage/news/food_journey_2021.jpg",
                "title": "Food Journey"
            },
            {
                "link": "https://mp.weixin.qq.com/s/cQmIYUy-bq3i49NdVEY9VA",
                "shortPara": "Semester A is half over and the midterm exams are over for the time being. To help our residents relax and exercise, we held a 'Just Dance' video dancing game night. ",
                "splashImage": "./web/homepage/news/just_dance_2021.jpg",
                "title": "Just Dance"
            },
            {
                "link": "https://mp.weixin.qq.com/s/DmyXjC-8fYosukzDLNsH_g",
                "shortPara": "On March 5th, the greatly awaited annual PEK singing contest - Professor Edmond Ko Cup Inter-hall Singing Contest 2020/21 was successfully held in the form of the online live broadcast. ",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/21_PEK_sincon.jpg",
                "title": "PEK Inter-hall Singing Contest"
            },
            {
                "link": "https://mp.weixin.qq.com/s/ISCR8XA5ZokGTtJfPkgoTw",
                "shortPara": "As the new semester was approaching, we organized a Door Decoration event in our hall. Our theme for the event is 'Good Vibes'.",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/21door_dec_cut.jpg",
                "title": "Door Decoration"
            },
            {
                "link": "https://mp.weixin.qq.com/s/NMjkWbffwQabqpbFO3u2iA",
                "shortPara": "Time flies quickly, and this semester has started four weeks in a blink of an eye. We finally could participate in the long-awaited sing con.",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/21_singcon.JPG",
                "title": "JCAC Singing Contest"
            },
            {
                "link": "https://mp.weixin.qq.com/s/FSlDHHgmA08dVUXL00RWJA",
                "shortPara": "Hoping that our hallmates will not forget the joy and sport spirit brought to us by football, the \"Soccer Table Tournament\" came into being.",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/20table_soccer.jpg",
                "title": "Soccer Table Tournament"
            },
            {
                "link": "https://mp.weixin.qq.com/s/ZHHeeNTgRr6YlOJiS_k8Pw",
                "shortPara": "To inherit the spirit of sports competition and pay attention to the hallmates' physical and mental health, we held a 'Rope Skipping Competition'! ",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/ropecover2.jpg",
                "title": "Rope Skipping Competition"
            },
            {
                "link": "http://www7.cityu.edu.hk/sro/academyhall/#/event/",
                "shortPara": "What? You don’t know how’s the hall life in Hall 4? Click here to check it out!",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/event%201808x720.png",
                "title": "Colourful Hall Life"
            },
            {
                "link": "https://www.cityu.edu.hk/sro/htm/e_policies_hallrules_04.htm",
                "shortPara": "Click on “READ MORE” to understand more about the hall rules of Hall 4.",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/update818hallrules1080x720.png",
                "title": "Hall Rules"
            },
            {
                "link": "https://www.instagram.com/tv/CECKGsuhW0U/?igshid=aamqqbja6lji",
                "shortPara": "Have you ever wondered what the hall life in Hall 4 is? Party forever? Revising only? Watch this video to find out now!",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/Hall%204%20video%20thumbnail%20new.png",
                "title": "Life in Hall 4"
            },
            {
                "link": "https://www.instagram.com/jcac_hall4/?hl=zh-hk",
                "shortPara": "Follow us on Facebook and Instagram now for more! ",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/social%201080x720.png",
                "title": "Our Social Media"
            },
            {
                "link": "https://jcacweb.github.io/2020YearBook/",
                "shortPara": "How was your this year? Hope you enjoyed a lot in JCAC✨ Now you can check our HALL YEAR BOOK!Check out our Hall Year Book now!",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/hall%20book%20mock%20up%202020%201080x720.png",
                "title": "Hall Year Book 2020"
            },
            {
                "link": "https://jcacweb.github.io/2019YearBook/",
                "shortPara": "How was your this year? Hope you enjoyed a lot in JCAC✨ Now you can check our HALL YEAR BOOK!Check out our Hall Year Book now!",
                "splashImage": "https://jcac-hall-web-cityu.github.io/imageRepository/1819/hall%20book%202019.png",
                "title": "Hall Year Book 2019"
            }
        ]
        database.ref('Content2').once('value').then(
            (snapshot)=>{
                let snapshotDat = snapshot.val()
                console.log('snapshotDat', snapshotDat);
                snapshotDat.contentForEvent.reverse();
                this.setState(snapshotDat);
                this.setState({"content": content});
            }
        )
    }

    render()
    {
        let contentForEvent = [
            {
                title: "PEK ATHLETIC",
                para: "CityU Athletic Meet was approaching. It was a perfect time to show our great enthusiasm fighting for hall 4. On 14th October, we gathered at the joint sport ...",
                date:"1 December",
				splashImage: "./web/homepage/ATHLETIC.png",
				link: "https://mp.weixin.qq.com/s/dOjWc5193zvvp6E324aPFg"
            }
        ]

        return (
            <HashRouter>
                <div className="App">
                    <Switch>
                        <Route 
                            exact={true} 
                            path={'/'} 
                            component={() => <Home content = {this.state.content} yearbook={this.state.yearbook}></Home>}
                            />
                        <Route 
                            exact={true} 
                            path={'/About'} 
                            component={() => <About yearbook={this.state.yearbook}></About>} />
                        <Route 
                            exact={true} 
                            path= {'/Event'} 
                            component={() => <EventPage content = {this.state.contentForEvent} yearbook={this.state.yearbook}></EventPage>} />
                        <Route 
                            exact={true} 
                            path={'/hall_management'} 
                            component={() => <HallManagement yearbook={this.state.yearbook}></HallManagement>}
                           />
                        <Route 
                            exact={true} 
                            path={'/facility'} 
                            component={() => <Facility content = {this.state.facility} yearbook={this.state.yearbook}></Facility>}
                           />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;

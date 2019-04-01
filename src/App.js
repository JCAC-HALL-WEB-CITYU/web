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
            contentForEvent:[]
        }
        let database = firebase.database();
        database.ref('Content').once('value').then(
            (snapshot)=>{
                this.setState(snapshot.val());
            }
        )
    }

    render()
    {
        
        

        let content = [
			{
				title: "M.A.C NIGHT",
				shortPara: "To embrace the robust Residential Year 2018/19, Student Residence Office (SRO) is pleased to join hands with Chair Prof. Ben LEUNG, Residence Master ...",
				splashImage: "./web/homepage/MAC.png",
				link: "https://mp.weixin.qq.com/s/ZJDl2b36pg_GmotgTJggLQ"
            },
            {
                title: "PEK SOCCER",
				shortPara: "We, JCAC Soccer Team, won Hall 11 Soccer Team with a final score of 15-0! That’s true, it is not a typo, it is 15:0! Our team players have done an excellent job ...",
				splashImage: "./web/homepage/SOCCER.png",
				link: "https://mp.weixin.qq.com/s/dOjWc5193zvvp6E324aPFg"
            },
            {
                title: "PEK ATHLETIC",
				shortPara: "CityU Athletic Meet was approaching. It was a perfect time to show our great enthusiasm fighting for hall 4. On 14th October, we gathered at the  ...",
				splashImage: "./web/homepage/ATHLETIC.png",
				link: "https://mp.weixin.qq.com/s/dOjWc5193zvvp6E324aPFg"
            }
        ];
        
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
                    <Helmet>

                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link> */}
                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link> */}
                        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script> */}
                    </Helmet>
                    {/* <Redirect to="/about" /> */}
                    <Switch>
                        <Route 
                            exact={true} 
                            path={'/'} 
                            component={() => <Home content = {this.state.content}></Home>}
                            />
                        <Route 
                            exact={true} 
                            path={'/About'} 
                            component={About} />
                        <Route 
                            exact={true} 
                            path= {'/Event'} 
                            component={() => <EventPage content = {this.state.contentForEvent}></EventPage>} />
                        <Route 
                            exact={true} 
                            path={'/hall_management'} 
                            component={HallManagement}
                           />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;

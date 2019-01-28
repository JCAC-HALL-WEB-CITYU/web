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

class App extends Component
{
    render()
    {
        return (
            <HashRouter>
                <div className="App">
                    <Helmet>

                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link> */}
                        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link> */}
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                    </Helmet>
                    {/* <Redirect to="/about" /> */}
                    <Switch>
                        <Route exact={true} path={'/'} component={Home} />
                        <Route exact={true} path={'/About'} component={About} />
                        <Route exact={true} path={'/Event'} component={EventPage} />

                        <Route exact={true} path={'/hall_management'} component={HallManagement} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;

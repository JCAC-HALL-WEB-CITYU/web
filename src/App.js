import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/picture/picture.js'
import { BrowserRouter as Router , Route }from 'react-router-dom';
import { HashRouter,Switch }from 'react-router-dom';
import { Redirect } from 'react-router'
import Home from './page/Home/Home';
import About from './page/About/About';
import EventPage from './page/EventPage/EventPage';
import HallManagement from './page/HallManagement/HallManagement';


class App extends Component {
  render() {
    return (
      <HashRouter>
            <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        {/* <Redirect to="/about" /> */}
        <Switch>
                <Route exact={true} path={'/'} component={Home}/>
                <Route exact={true} path={'/About'} component={About}/>
                <Route exact={true} path={'/Event'} component={EventPage}/>
                
                <Route exact={true} path={'/hall_management'} component={HallManagement}/>
                </Switch>
            </div>
        </HashRouter>
    );
  }
}

export default App;

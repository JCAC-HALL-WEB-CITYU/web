import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/picture/picture.js'
import { BrowserRouter as Router , Route }from 'react-router-dom';
import { Redirect } from 'react-router'
import Home from './page/Home/Home';
import About from './page/About/About';


class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <Redirect to="/about" />
                <Route exact={true} path={'/'} component={Home}/>
                <Route exact={true} path={'/About'} component={About}/>
            </div>
        </Router>
    );
  }
}

export default App;

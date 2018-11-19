import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './picture/picture.js'
import { BrowserRouter as Router , Route }from 'react-router-dom';
import Home from './page/Home';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
                <Route exact={true} path={'/'} component={Home}/>
            </div>
        </Router>
    );
  }
}

export default App;

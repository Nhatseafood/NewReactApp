import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SearchView from './components/Search';
import CustomNavbar from './components/CustomNavBar';

import GameGallery from './components/GameGallery';

class App extends Component {

  render() {
    
    return (
    <Router>
     <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchView} />
        <Route path="/about" component={About} />

      </div>
    </Router>  
    );
  }
}

export default App;

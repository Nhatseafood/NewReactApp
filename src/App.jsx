import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';


class App extends Component {
  render() {
    return (
    <Router>
     <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />

       <h1>REACT APP</h1>
       
      </div>
    </Router>  
    );
  }
}

export default App;

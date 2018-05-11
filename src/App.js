import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import CustomNavbar from './components/CustomNavBar';
import API_KEY from './my_secret_api_key.json';

class App extends Component {
  constructor(props) {
  super(props)
    this.state={
    games: []
  }};

  componentWillMount() {
    fetch("https://api-endpoint.igdb.com/games/?fields=name,popularity&order=popularity:desc", {
      method: "GET",
      headers: {
        "user-key": API_KEY.key,
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(payload => {
      console.log(payload, "<<this is my payload")
      this.setState({games:payload})
    })
    
  }


  render() {


    const gameItem = this.state.games.map(game => (

      <div key={game.id}>
        <h3> {game.name} </h3>
        <div> </div>
        </div>
    ));
    



    return (
    <Router>
     <div>
        <CustomNavbar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <div>
          <h2>Most Popular Games</h2>
          {gameItem}

          </div>

       
       
      </div>
    </Router>  
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { JumboTron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import GameGallery from './GameGallery';

class Home extends Component {
    render() {
        return (
           <Grid>
               <div class="jumbotron">
                    <h1>Hello, welcome to the world of gaming!</h1>
                        <p>...</p>
                        <p><a class="btn btn-primary btn-lg" href="/about" role="button">Learn more</a></p>
                        </div>
              <h1> Current Top Games </h1>
     
              <GameGallery />

           </Grid>   
        )
    }
}

export default Home;
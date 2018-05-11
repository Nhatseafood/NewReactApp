import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { JumboTron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import GameGallery from './GameGallery';

class Home extends Component {
    render() {
        return (
           <Grid>
              <h1> Current Top Games </h1>
              <GameGallery />

           </Grid>   
        )
    }
}

export default Home;
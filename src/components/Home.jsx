import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { JumboTron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
           <Grid>
              <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                  <p class="lead">HIIIII</p>
              </div>
              <Link to="/about">
              <Button bsStyle="primary">About</Button>
              </Link>
           </Grid>   
        )
    }
}

export default Home;
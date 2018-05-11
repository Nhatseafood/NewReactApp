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


                        <div class="container">
                            <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                <img src="https://cdn.gamerant.com/wp-content/uploads/Gears-of-War-5-Microsoft-tease.jpg" alt="..."/>
                                <div class="caption">
                                    <h3>Coming Soon</h3>
                                    <p>Loren Ipsum bla bla bla.</p>
                                    <p><a href="https://www.igdb.com/games/coming_soon" class="btn btn-primary" role="button">More Info</a> </p>
                                    <div class="card-footer">
                                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                <img src="https://cdn.images.express.co.uk/img/dynamic/143/590x/Metroid-Samus-Returns-863878.jpg" alt="..."/>
                                <div class="caption">
                                    <h3>New Releases</h3>
                                    <p>Loren Ipsum bla bla bla.</p>
                                    <p><a href="https://www.igdb.com/games/recently_released" class="btn btn-primary" role="button">More Info</a> </p>
                                    <div class="card-footer">
                                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                <img src="http://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/03/tron-3-reboot.jpg?itok=Qz8Dr9Bw" alt="..."/>
                                <div class="caption">
                                    <h3>Featured</h3>
                                    <p>Loren Ipsum bla bla bla.</p>
                                    <p><a href="https://www.igdb.com/pulse" class="btn btn-primary" role="button">More Info</a> </p>
                                    <div class="card-footer">
                                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="thumbnail">
                                <img src="https://cdn.images.dailystar.co.uk/dynamic/122/photos/60000/900x738/1226060.jpg" alt="..."/>
                                <div class="caption">
                                    <h3>Most Anticapated</h3>
                                    <p>Loren Ipsum bla bla bla.</p>
                                    <p><a href="https://www.igdb.com/top-100/anticipated" class="btn btn-primary" role="button">More Info</a> </p>
                                    <div class="card-footer">
                                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>

              <h1> <b>Current Top Games</b> </h1>
     
              <GameGallery />

           </Grid>   
        )
    }
}

export default Home;
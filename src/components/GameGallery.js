import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {fetchGames} from '../actions/gameActions';

class GameGallery extends Component {

    componentWillMount() {
      this.props.fetchGames()
    }
  
    render() {

      const gameItems = this.props.games.map(game => (
        <div key={game.id}>
          <h3> {game.name} <span className="pull-right">{game.rating}</span></h3>

          <div> <img src={game.cover.url} /></div>

          <p> {game.summary} </p>
          </div>
      ));
      
      return (
      <div>
         {gameItems}
      </div>
      );
    }
  }
  
  GameGallery.propTypes={ 
    fetchGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired
  }
  const mapStateToProps = state => (
    {
      games: state.games.items 
    }
  );
  
export default connect(mapStateToProps, {fetchGames})(GameGallery);
  
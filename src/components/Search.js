import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';

import {searchGames} from '../actions/gameActions';

class SearchView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameName: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault();
    const searchQuery = this.state.gameName;

    this.props.searchGames(searchQuery);
  }

    render() {

      const gameItems = this.props.games.map(game => (
        <div key={game.id}>
          <h3> {game.name} <span className="pull-right">{game.publishers}</span></h3>

          <p> {game.summary} </p>
          </div>
      ));
      
      return (
      <div>
       
        <div>
          
          <SearchBar />
          {gameItems}
        </div>  
      </div>
      );
    }
  }
  
  SearchView.propTypes={ 
    searchGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired
  }
  const mapStateToProps = state => (
    {
      games: state.games.items 
    }
  );
  
export default connect(mapStateToProps, {searchGames})(SearchView);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchGames } from '../actions/gameActions'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      games: ''
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
      
      return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input name="gameName" onChange={this.onChange} value={this.state.gameName} />
          <button type="submit"> SEARCH </button>
        </form>
      </div>
      );
    }
  }
  
  SearchBar.propTypes= { 
    searchGames: PropTypes.func.isRequired,
  }
  
export default connect(null, {searchGames})(SearchBar);


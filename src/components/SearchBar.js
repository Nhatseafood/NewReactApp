import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchGames } from '../actions/gameActions'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      games: '',
      gameName: ''
    }

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ gameName : e.target.value })
  }
  
  // onSubmit(e) {
  //   e.preventDefault();
  //   const searchQuery = this.state.gameName;
  //   console.log(searchQuery)
  //   this.props.searchGames(searchQuery);
  // }

    render() {
      
      return (
      <div>
        {/* <form onSubmit={this.onSubmit}> */}
          <input name="gameName" onChange={this.onChange} value={this.state.gameName} />
          <button onClick={()=> this.props.onSearchGames(this.state.gameName)}> SEARCH </button>
        {/* </form> */}
      </div>
      );
    }
  }
  
  SearchBar.propTypes= { 
    searchGames: PropTypes.func.isRequired,
  }

  const mapDispatchToProps = dispatch => {
    return {
      onSearchGames :(gameName) => dispatch(searchGames(gameName))
    }
  }

  
  
export default connect(null, mapDispatchToProps)(SearchBar);


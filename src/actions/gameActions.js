import {FETCH_GAMES, SEARCH_GAMES , DISPLAY_GAMES} from './types';
import API_KEY from '../my_secret_api_key.json';

export const fetchGames = () => dispatch => {
  fetch("https://api-endpoint.igdb.com/games/?fields=name,cover,category,genres,rating,summary,platforms,publishers,popularity&order=popularity:desc", {
    method: "GET",
    headers: {
    "user-key": API_KEY.key,
    "Accept": "application/json"
  }
})
  .then(response => response.json())
  .then(games => dispatch({
      type: FETCH_GAMES,
      payload: games
    })
  )
}

export const searchGames = (searchEntry) => dispatch => {
  fetch("https://api-endpoint.igdb.com/games/?search=" + searchEntry + "&fields=*", {
    method: "GET",
    headers: {
    "user-key": API_KEY.key,
    "Accept": "application/json"
  }
})
  .then(response => response.json())
  .then(searchResults => dispatch({
      type: SEARCH_GAMES,
      payload: searchResults
    })
  )
}

// export const displayGames = () => dispatch => {
//   fetch("https://api-endpoint.igdb.com/games/" , {
//     method: "GET",
//     headers: {
//     "user-key": API_KEY.key,
//     "Accept": "application/json"
//   }
// })
//   .then(response => response.json())
//   .then(games => dispatch({
//       type: DISPLAY_GAMES,
//       payload: games
//     })
//   )
// }
import {FETCH_GAMES, SEARCH_GAMES, DISPLAY_GAMES} from '../actions/types';

const intialState = { 
    items: [],
    item: {} 
}

export default function(state = intialState, action) {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                items: action.payload
            }
        case SEARCH_GAMES:
            return {
                ...state,
                items: action.payload
            }
        case DISPLAY_GAMES:
            return {
                ...state,
                items: action.payload 
            }       
        default: 
            return state
    }
}
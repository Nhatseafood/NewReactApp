import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({

});

const loggerMiddleware = createLogger();




const store = createStore(
    rootReducer,

    undefined,
    

    compose(

        applyMiddleware(
           
            thunkMiddleware,
           
            loggerMiddleware
        )
    )

);

export default store;
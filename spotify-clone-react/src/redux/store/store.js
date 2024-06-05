import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from "redux-thunk";
import {preferitiReducer, searchDataReducer, errorsReducer} from "../reducers/reducers";

const inititalState = {
    likedSongs: [],
    searchData: {
        searchQuery: '',
        searchResults: [],
    },
    errors: {
        queryLenghtError: '',
    },
}

const reducersCombiner = combineReducers({

    likedSongs: preferitiReducer,
    searchData: searchDataReducer,
    errors: errorsReducer,

})

export const store = createStore(reducersCombiner, inititalState, applyMiddleware(thunk))
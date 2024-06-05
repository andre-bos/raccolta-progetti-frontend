import React from 'react';

function preferitiReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload]

        default: break;
    }

    return state
}

function searchDataReducer(state = '', action) {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload};

        case 'SET_SEARCH_RESULTS':
            return {...state, searchResults: action.payload}

        default: break;
    }

    return state
}

function errorsReducer(state = '', action) {
    switch(action.type) {
        case 'QUERY_LENGHT_ERROR':
            return {...state, queryLenghtError: action.payload}

        default: break;
    }

    return state;
}

export { preferitiReducer, searchDataReducer, errorsReducer };
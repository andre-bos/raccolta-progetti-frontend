// Uso quest'azione per settare il valore della query di ricerca nel Redux store alla proprietà searchQuery

import axios from "axios";

export const setSearchQuery = (queryRicerca) => ({
    type: 'SET_SEARCH_QUERY',
    payload: queryRicerca
})

export const setSearchResults = (searchResults) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: searchResults
    }
}

export const fetchSearchResults = (queryRicerca) => {
    return function (dispatch, getState) {
        axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${queryRicerca}`).then(response => {
            dispatch(setSearchResults(response.data))
        })
    }
}

export const setLenghtError = (errorContent) => ({
    type: 'QUERY_LENGHT_ERROR',
    payload: errorContent
})
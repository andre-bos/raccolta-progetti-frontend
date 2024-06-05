import React from 'react';
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";

function CardsRowTitle() {
    const queryRicerca = useSelector(state => state.searchData.searchQuery)
    return (
        <>
            <h2 className='titolo-cards mb-3'>Risultati di ricerca per: {queryRicerca}</h2>
        </>
    );
}

export default CardsRowTitle;
import React from 'react';
import CardsRowTitle from "./CardsRowTitle";
import SingleCard from "./SingleCard";
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";

function CardsRow({searchQuery, risultatiRicerca}) {

    const queryLenghtError = useSelector(state => state.errors.queryLenghtError)

    return (
        <>
            {searchQuery.length === 0 ? null : 
                searchQuery.length < 3 ? (
                    <p className='text-white'>{queryLenghtError}</p>
                ) : (
                    <>
                        <CardsRowTitle />
                        {risultatiRicerca.data && risultatiRicerca.data.slice(0, 4).map(
                            (ele, index) => <SingleCard key={index} data={ele} />
                        )}
                    </>
                )
            }
        </>
    );
}
export default CardsRow;
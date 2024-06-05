/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardsRowTitleStatic from './CardsRowTitleStatic'
import SingleCard from './SingleCard'

export default function CardsRowStatic({searchQuery}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`).then(response => {
            setData(response.data.data);
            console.log(data)
        })
    }, [searchQuery])

    return (
        <div>
            
            {data && data.slice(0, 4).map((ele, index) => (
            <SingleCard key={index} data={ele} />
))}
        </div>
    );
    
} */

import axios from 'axios'
import React, { useEffect, useState } from 'react';
import CardsRowTitle from "./CardsRowTitle";
import SingleCard from "./SingleCard";
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import CardsRowTitleStatic from './CardsRowTitleStatic';

function CardsRowStatic({searchQuery}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`).then(response => {
            setData(response.data.data);
            console.log(data)
        })
    }, [searchQuery])

    const queryLenghtError = useSelector(state => state.errors.queryLenghtError)

    return (
        <>
            {searchQuery.length === 0 ? null : 
                searchQuery.length < 3 ? (
                    <p className='text-white'>{queryLenghtError}</p>
                ) : (
                    <>
                        <CardsRowTitleStatic searchQuery={searchQuery} />
                        {data && data.slice(0, 4).map(
                            (ele, index) => <SingleCard key={index} data={ele} />
                        )}
                    </>
                )
            }
        </>
    );
}
export default CardsRowStatic;

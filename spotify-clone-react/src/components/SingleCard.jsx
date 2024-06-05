import React from 'react';
import {Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

function SingleCard({data}) {
    console.log('Dati artista ' , data);
    return (
        <>
            <Col className='text-center'>
                <a href='#'>
                    <img className='img-fluid mb-2' src={data.album.cover_medium} alt={data.artist.name} />
                </a>
                <p className='m-0'><a href="#" className='card-link'>Album: {data.album.title}</a></p>
                <Link to={`/artist/${data.artist.id}`} className='card-link'><p className='m-0'>Artista: {data.artist.name}</p></Link>
            </Col>
        </>
    );
}

export default SingleCard;
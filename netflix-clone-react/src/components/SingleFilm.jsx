import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'

export default function SingleFilm({film}) {
    const [hover, setHover] = useState(false);
  return (
    <Col className={`col-film mb-2 px-1 ${hover ? 'transform-over scale-over' : ''}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img className='img-fluid' src={film.Poster} alt={film.Title} />

        {hover && (
            
            <Card className='rounded-0 text-white border-0' style={{backgroundColor: '#212529'}}>
                <Card.Body>
                    <Card.Title>{film.Title}</Card.Title>
                    <Card.Text>
                    Anno: {film.Year} <br />
                    Tipo: {film.Type}
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
    </Col>
  )
}

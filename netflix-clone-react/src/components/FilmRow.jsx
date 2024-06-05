import React, { useState, useEffect } from 'react'
import SingleFilm from './SingleFilm'
import { Container, Row } from 'react-bootstrap';

export default function FilmRow({search, titolo}) {

  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    if (search.length < 3) {
      setFilmData(null);
      return;
    }

    const url = `http://www.omdbapi.com/?apikey=2a543a16&s=${search}`;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => setFilmData(data.Search))
      .catch(error => console.error(error));
  }, [search]);

  return (
     <div>
        <h4 className='px-4 text-white'>{titolo}</h4>
        <Container fluid className='mb-4 no-gutters text-center px-5'>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6'>
            {search.length < 3 ? (
              <p className='text-white'>Devi digitare almeno tre caratteri</p>
            ) : (
              filmData && filmData.map(film => <SingleFilm key={film.imdbID} film={film}/>)
            )}
          </Row>
        </Container>
      </div>
  )
}


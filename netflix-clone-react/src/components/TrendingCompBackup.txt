import React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { endPoint } from '../data/ApiData';

export default class TrendingComp extends Component {

  state = ({
    datiFilm: []
  })

  componentDidMount() {
    fetch(endPoint)
    .then(response => response.json())
    .then((oggettoFilm) => this.setState({
      datiFilm: oggettoFilm.Search
    }))
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        <h4 className='px-4 text-white'>Trending Now</h4>
        <Container fluid className="mb-4 no-gutters text-center px-5">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">

            {this.state.datiFilm.map(f =>
              <Col className="mb-2 px-1" key={f.imdbID}>
              <img className="img-fluid img-size" src={f.Poster} alt={f.Title}/>
            </Col>
            )}
            
          </Row>
        </Container>
      </div>
    );
  }
}

/* const TrendingComp = () => {
  return (
    <div>
      <h4 className='px-4 text-white'>Trending Now</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img1} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img2} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img3} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img4} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img5} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img6} alt="movie picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrendingComp; */
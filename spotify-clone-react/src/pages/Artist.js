import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import MainNav from '../components/MainNav';
import CardsRow from '../components/CardsRow';
import MediaPlayer from '../components/MediaPlayer';
import { useSelector } from 'react-redux';
import CardsRowStatic from '../components/CardsRowStatic';
import ArtistTable from '../components/ArtistTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Artist() {
  const [artistData, setArtistData] = useState(null);
  const [tracklistData, setTracklistData] = useState(null);

  const { artistId } = useParams();

  useEffect(() => {
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
      .then((response) => {
        setArtistData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch artist data:', error);
      });
  }, [artistId]);

  useEffect(() => {
    axios.get(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`)
      .then(response => {
        setTracklistData(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch album data:', error);
      });
  }, []);

  console.log(artistData)

  return (
    <>
      <Container fluid className="p-0 g-0">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col xs={10} className="p-0" style={{ border: '2px solid green' }}>
            <Row className="mt-3" style={{ border: '2px solid brown' }}>
              <MainNav />
            </Row>

            <Row className="d-flex flex-col p-0 mt-5 ms-5" style={{ border: '2px solid yellow' }}>
              <Col xs={2}>
                <img className="img-fluid" src={artistData && artistData.picture_medium} alt="Artist" />
              </Col>
              <Col xs={4} className="align-self-end p-0 m-0">
                <h2 className="titolo-cards">{artistData && artistData.name}</h2>
              </Col>
            </Row>

            <Row className="mt-5">
              <ArtistTable tracklistData={tracklistData} />
            </Row>

            <MediaPlayer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
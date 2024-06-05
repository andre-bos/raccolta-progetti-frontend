import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import MainNav from '../components/MainNav'
import CardsRow from "../components/CardsRow";
import MediaPlayer from "../components/MediaPlayer";
import { useSelector } from 'react-redux';
import CardsRowStatic from '../components/CardsRowStatic';

export default function Homepage() {
  const risultatiRicerca = useSelector(state => state.searchData.searchResults)
  const searchQuery = useSelector(state => state.searchData.searchQuery)
  return (
    <>
        <Container fluid className='p-0'>
          <Row>
              <Col xs={2}>
                  <Sidebar />
              </Col>

              <Col xs={10} className='p-0'>

                  <Row className='mt-3 p-0'>
                    <MainNav />
                  </Row>

                  <Row className='ms-5 mt-5'>
                    <CardsRow risultatiRicerca={risultatiRicerca} searchQuery={searchQuery}/>
                  </Row>

                  <Row className='ms-5 mt-5'>
                    <CardsRowStatic searchQuery="Fiorella Mannoia"/>
                  </Row>

                  <Row className='ms-5 mt-5'>
                    <CardsRowStatic searchQuery="Vasco Rossi"/>
                  </Row>

                  <MediaPlayer />
              </Col>
          </Row>
        </Container>
    </>
  )
}

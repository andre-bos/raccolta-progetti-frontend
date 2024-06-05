import React, {useState} from 'react'
import { InputGroup, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/Spotify_Logo.png'
import {useDispatch, useSelector} from "react-redux"
import {fetchSearchResults, setLenghtError, setSearchQuery} from "../redux/actions/actions";

export default function Sidebar() {
    const dispatch = useDispatch()
    const queryRicerca = useSelector(state => state.searchData.searchQuery)
    const risultatiRicerca = useSelector(state => state.searchData.searchResults)
    console.log(queryRicerca)
    console.log(risultatiRicerca)

  return (
    <>
        <Navbar className="fixed-left">
                <div className="nav-container d-flex justify-content-between align-items-center flex-column mx-1">
                    <Navbar.Brand>
                        <img src={logo} alt="Spotify_Logo" width={131} height={40} />
                    </Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Navbar className="navbar-nav" >
                            <ul className='ps-0'>
                                <li className='ps-4'>
                                    <a className="nav-item nav-link" href="index.html">
                                        <FontAwesomeIcon icon={faHome} className="fa-lg" /> Home
                                    </a>
                                </li>
                                <li className='ps-4'>
                                    <a className="nav-item nav-link" href="#">
                                        <FontAwesomeIcon icon={faBookOpen} className="fa-lg" /> Your Library
                                    </a>
                                </li>
                                <InputGroup className="input-group mt-3 px-3">
                                    <input
                                        onChange={(e) => {
                                            dispatch(setSearchQuery(e.target.value))
                                            if(e.target.value.length >= 3) {
                                                dispatch(fetchSearchResults(queryRicerca))
                                            } else {
                                                dispatch(setLenghtError('Devi digitare almeno tre caratteri'))
                                            }
                                        }}
                                        type="text"
                                        value={queryRicerca}
                                        className="form-control mb-2" id="searchField"
                                        placeholder="Cerca"
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                            </ul>
                        </Navbar>
                    </div>
                </div>
                <div className="nav-btn">
                    <button className="signup-btn" type="button">
                        Sign Up
                    </button>
                    <button className="login-btn" type="button">
                        Login
                    </button>
                    <a href="#" className='text-decoration-none'>Cookie Policy</a> | <a href="#" className='text-decoration-none'> Privacy</a>
                </div>
            </Navbar>
    </>
  )
}

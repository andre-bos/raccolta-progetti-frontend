import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import logo from '../assets/logo.png';
import { FaBell, FaSearch, FaUser } from "react-icons/fa";

export default function NavigationBar({onSearch}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };


  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <Navbar expand="lg" variant="dark" className="justify-content-between px-3">
    <div className="d-flex align-items-center font-weight-bold" style={{width: "60%"}}> 
       <Navbar.Brand href="#">
        <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
        </Nav> 
    </div>

    <div className="d-flex align-items-center justify-content-end" style={{border: '2px solid green', width: '30%'}}>
        <Navbar.Text onClick={handleSearchClick} className='me-1'><FaSearch /></Navbar.Text>
        {isSearchOpen && (
          <Form className="d-block ms-1 me-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={handleInputChange} />
          </Form>
        )}
        <div id="kids" className='me-1'>KIDS</div>
        <Navbar.Text className='me-1'><FaBell /></Navbar.Text>
        <Navbar.Text className='me-1'><FaUser /></Navbar.Text>
    </div>
</Navbar>
  )
}

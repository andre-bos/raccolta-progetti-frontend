import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { FaThLarge, FaTh } from "react-icons/fa";

export default function Generi() {
  return (
    <Container fluid>
        <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <Dropdown className="ml-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            Genres &nbsp;
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item className="text-white bg-dark">Comedy</Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark">Drama</Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <FaThLarge className="icons" />
        <FaTh className="icons" />
      </div>
    </div>
    </Container>
  )
}

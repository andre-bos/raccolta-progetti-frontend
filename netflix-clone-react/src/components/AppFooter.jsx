import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

export default function AppFooter() {
  return (
    <Container fluid>
            <Row className="text-center mt-5">
                <Col sm={{ span: 6, offset: 3 }}>
                    <div>
                        <Row>
                            <Col xs={12} className="text-left mb-2">
                                <i className="fa fa-facebook footer-icon"></i>
                                <i className="fa fa-instagram footer-icon"></i>
                                <i className="fa fa-twitter footer-icon"></i>
                                <i className="fa fa-youtube footer-icon"></i>
                            </Col>
                        </Row>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                            <Col>
                                <Row>
                                    <Col xs={12} className="footer-links">
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Audio and Subtitles</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Media Center</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Privacy</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Contact us</a></p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} className="footer-links">
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Audio Description</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Investor Relations</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Legal Notices</a></p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} className="footer-links">
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Help Center</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Jobs</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Cookie Preferences</a></p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} className="footer-links">
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Gift Cards</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Terms of Use</a></p>
                                        <p><a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Corporate Information</a></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={12} className="text-start mb-2">
                                <Button variant="secondary" className="btn-sm footer-button rounded-0 mt-3 border border-secondary">
                                    Service Code
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-start mb-2 mt-2 copyright">
                                © 1997-2022 Netflix, Inc.
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
  );
}

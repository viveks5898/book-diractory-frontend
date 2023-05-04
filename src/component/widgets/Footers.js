import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ModalFooter } from "react-bootstrap";
import './Footer.module.css'
import style from './Footer.module.css'

const Footers = () => {
  return (
    <ModalFooter className={style.footer} >
      <Container fluid>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p>We are a team of developers building awesome apps.</p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
          <Col>
            <h5>About Us</h5>
            <p>We are a team of developers building awesome apps.</p>
          </Col>
        </Row>
      </Container>
    </ModalFooter>
  );
};

export default Footers;

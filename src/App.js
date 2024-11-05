import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import data from './pages/data.js';
import Detail from './pages/Detail.js';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [newsdata] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}
            style={{ cursor: 'pointer' }}>
            <img
              src="/Main_image.jpg"
              width="50"
              height="50"
              alt="logo"
            />
            뉴스 및 여론 요약 서비스
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>home</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#주제1">주제1</Nav.Link>
            <Nav.Link href="#주제1">주제2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<div>
          <Container>
            <Row className='justify-content-center'>
              {
                newsdata.map((item, index) => (
                  <Col md={12} key={index} className='mb-4'>
                    <Card className="text-center">
                      <Card.Img variant="top" src={item.image} className="center-image" />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          {item.content}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Container></div>} />
        <Route path="/detail/:id" element={<Detail newsdata={newsdata} />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}


export default App;
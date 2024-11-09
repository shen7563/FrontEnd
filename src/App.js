import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
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
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" bg="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">뉴스 및 여론 요약 서비스</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* 주제 개수만큼 반복할 수 있게 */}
          </Nav>
        </Navbar.Collapse>
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
                        <Card.Title onClick={() => {navigate(`/detail/${index}`)}} style={{cursor:'pointer'}}>{item.title}</Card.Title>
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
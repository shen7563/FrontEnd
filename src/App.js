import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import data from './pages/data.js';
import Detail from './pages/Detail.js';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function App() {

  let [newsdata] = useState(data);
  let [selectedTopic, setSelectedTopic] = useState(null);
  let navigate = useNavigate();

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  }

  const handleMainClick = () => {
    setSelectedTopic(null);
  }

  const filteredNewsData = selectedTopic ? newsdata.filter(item => item.topic === selectedTopic) : newsdata;

  const topics = [...new Set(data.map(item => item.topic))];

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" bg="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleMainClick}>뉴스 및 여론 요약 서비스</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {topics.map((topic, index) => (
                <Nav.Link key={index} onClick={() => handleTopicClick(topic)}>{topic}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <div>
            <Container>
              <Row xs={1} md={2} className="g-4">
                {filteredNewsData.map((item, index) => (
                  <Col key={index}>
                    <Card>
                      <Card.Img variant="top" src={item.image} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 auto' }} />
                      <Card.Body>
                        <Card.Title onClick={() => { navigate(`/detail/${index}`) }} style={{ cursor: 'pointer' }}>{item.title}</Card.Title>
                        <Card.Text>
                          {item.content}
                          <br></br>
                          {item.opinion}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        } />
        <Route path="/detail/:id" element={<Detail newsdata={newsdata} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}


export default App;
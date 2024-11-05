import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './pages/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import axios from 'axios';

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
          <Nav className="ms-auto">
            <Nav.Link onClick={() => { navigate('/') }}>home</Nav.Link>
            <Nav.Link href="#주제2">주제2</Nav.Link>
            <Nav.Link href="#주제3">주제3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>
          <div className="container">
            <div className='row'>
              {
                newsdata.map((a, i) => {
                  return (
                    <Card newsdata={newsdata[i]}></Card>
                  )
                })
              }
            </div>
          </div></div>} />
        <Route path="/detail/:id" element={<Detail newsdata={newsdata} />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();

  return (
    <div className='col-md-12 card-container'>
      <h4 onClick={() => navigate(`/detail/${props.newsdata.id}`)} style={{ cursor: 'pointer', marginRight: '10px' }}>
        {props.newsdata.title}
      </h4>
      <p className='content'>{props.newsdata.content}</p>
      <img 
        src={props.newsdata.image} 
        alt={props.newsdata.title} 
        className='image'
      />
    </div>
  );
}

export default App;
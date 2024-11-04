import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/Main_image.jpg"
              width="50"
              height="50"
              alt="logo"
            />
            뉴스 및 여론 요약 서비스
            </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#주제1">주제1</Nav.Link>
            <Nav.Link href="#주제2">주제2</Nav.Link>
            <Nav.Link href="#주제3">주제3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className='row'>
          <div className='col-md-4'>1번주제</div>
          <div className='col-md-4'>2번주제</div>
          <div className='col-md-4'>3번주제</div>
          <div className='col-md-4'>4번주제</div>
        </div>
      </div>
    </div>
  );
}

export default App;
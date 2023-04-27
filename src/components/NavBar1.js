
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const  ContainerInsideExample= () => {
  return (
    <Navbar bg="dark" >
    <Container className='container'>
      <Navbar.Brand href="#home">Movie App </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home  </Nav.Link>
        <Nav.Link href="upcoming"> Upcoming  </Nav.Link>
        <Nav.Link href="#tv-show"> TV-Show </Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  );
}

export default ContainerInsideExample;


import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const  ContainerInsideExample= () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >App Movie </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;

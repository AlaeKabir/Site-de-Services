import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBarFunction() {
  return (
    <>
      <Navbar bg="primary" >
        <Container>
          <Navbar.Brand as={Link} to="/">Tutor+</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/tuteurs">Find Tutor</Nav.Link>
            <Nav.Link as={Link} to="/devenir-tuteur">Become Tutor</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBarFunction;
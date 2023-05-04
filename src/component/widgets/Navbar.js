import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <>
      <Navbar bg="white" variant="black" style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', background:"green" }}>
        <Container>
          <Navbar.Brand href="#home">B-Directory</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Author</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>

            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbars;
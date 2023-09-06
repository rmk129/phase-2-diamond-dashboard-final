import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar2(){
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
            src="https://www.pngmart.com/files/1/Real-Diamond-PNG.png"
            alt="diamond"
            width="120px"
            length="120px"
            display= "inline-block"
            />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stockdashboard">Diamond Dashboard</Nav.Link>
            <Nav.Link href="/selldashboard">Sell Diamonds</Nav.Link>
            <Nav.Link href="/addform">Add Diamonds</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar2;
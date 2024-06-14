import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
    return(
      <Navbar expand='lg' className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href='/'> <img src='https://cdn-icons-png.flaticon.com/512/31/31737.png' width='30' height='30' className="d-inline-block align-top"></img>Energy Types</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-new"></Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-new'>
            <Nav.Link id='link1' href='/'>Home</Nav.Link>
            <Nav.Link id='link1' href='#test'>Test</Nav.Link>
            <Nav.Link id='link1' href='#spells'>Spells</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default MyNavbar;
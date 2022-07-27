import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
       
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style= {{ maxHeight: '100px' }}
            navbarScroll
          >
         <NavDropdown title="HOME" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hello😎<br></br></NavDropdown.Item>
             
              <NavDropdown.Divider />
        </NavDropdown>
          
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
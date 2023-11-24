
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">fripedeluxe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">remisee!!!</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./hoodies.jpeg"
         style={{width:'100%',height:'400px'}} />
        <Card.Body>
          <Card.Title>hoodies</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">10d</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./sneakers.jpeg" 
        style={{width:'100%',height:'400px'}} />
        
        <Card.Body>
          <Card.Title>sneakers</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">25d</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./shirt.jpeg" 
         style={{width:'100%',height:'400px'}} />
        <Card.Body>
          <Card.Title>t-shirt</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2d</small>
        </Card.Footer>
      </Card>
    </CardGroup>


  

    </div>
  );
}

export default App;

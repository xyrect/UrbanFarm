import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigasi() {
    const navbarFont = {
        fontFamily: 'Gothic Century, sans-serif',
        fontWeight: 'bold', 
        fontSize: '1.5rem', 
        backgroundColor:'#334B35'
      };
  return (
    <>
      <Navbar data-bs-theme="dark" fixed='top' 
      style={{backgroundColor:'#334B35',fontSize:'1.3rem'}}>
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={Link} to ="/" style={navbarFont}>
            <img
              src='./public/logo/mylogo.png' 
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="UrbanFarm Logo"
            />
            <span className="ml-2"> UrbanFarm</span>
          </Navbar.Brand>
          <Nav className="ml-auto" style={{fontFamily:'Gothic Century, sans-serif'}}>
            <Nav.Link as={Link} to ="/">Beranda</Nav.Link>
            <Nav.Link as={Link} to ="/tentangkami">Tentang Kami</Nav.Link>
            <Nav.Link as={Link} to ="/panduan">Panduan</Nav.Link>
            <Nav.Link as={Link} to ="/artikel">Artikel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;

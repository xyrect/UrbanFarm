import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          <Navbar.Brand href="#home" style={navbarFont}>
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
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#features">Tentang Kami</Nav.Link>
            <Nav.Link href="#pricing">Panduan</Nav.Link>
            <Nav.Link href="#Artikel">Artikel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;

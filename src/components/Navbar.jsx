import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigasi() {
  const navbarFont = {
    fontFamily: 'Gothic Century, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    backgroundColor: '#334B35',
  };

  return (
    <>
      <Navbar
        data-bs-theme="dark"
        fixed="top"
        expand="md"
        style={{ backgroundColor: '#334B35', fontSize: '1.3rem' }}
      >
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={NavLink} to="/" style={navbarFont}>
            <img
              src='./public/logo/mylogo.png'
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="UrbanFarm Logo"
            />
            <span className="ml-2"> UrbanFarm</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav style={{ fontFamily: 'Gothic Century, sans-serif' }} className="ml-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link" activeClassName="active">
                Beranda
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tentangkami" className="nav-link" activeClassName="active">
                Tentang Kami
              </Nav.Link>
              <Nav.Link as={NavLink} to="/panduan" className="nav-link" activeClassName="active">
                Panduan
              </Nav.Link>
              <Nav.Link as={NavLink} to="/artikel" className="nav-link" activeClassName="active">
                Artikel
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;

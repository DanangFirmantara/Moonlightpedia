import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Bell } from 'lucide-react';
import '../App.css';
import navbarBg from '../assets/navbar.png';
import logo from '../assets/logo.png';

function CustomNavbar() {
  return (
    <div style={{ width: '100%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
      {/* Top background/logo/user row */}
      <div
        style={{
          minHeight: 70,
          backgroundImage: `url(${navbarBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}
      >
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" height="40" className="me-2" />
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3">
            <Bell size={22} strokeWidth={2} color="#4B4B4B" />
          </span>
          <NavDropdown title={<span><span className="badge bg-primary me-2" style={{ fontSize: '1rem' }}>A</span> User</span>} id="user-nav-dropdown" align="end">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      {/* Menu row below background */}
      <Navbar bg="white" expand="lg" className="border-bottom shadow-sm py-0" style={{ minHeight: 38 }}>
        <Container style={{ paddingLeft: 32, paddingRight: 0 }} fluid>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <Nav className="align-items-center" style={{ gap: 0 }}>
                <Nav.Link href="#">Dashboard</Nav.Link>
                <NavDropdown title="Pipeline" id="pipeline-nav-dropdown">
                  <NavDropdown.Item href="#">Pipeline 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Pipeline 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="RAMS" id="rams-nav-dropdown">
                  <NavDropdown.Item href="#">RAMS 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">RAMS 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Operating Tools" id="operating-tools-nav-dropdown">
                  <NavDropdown.Item href="#">Tool 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tool 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cust Info" id="cust-info-nav-dropdown">
                  <NavDropdown.Item href="#">Customer 1</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Internal Info" id="internal-info-nav-dropdown">
                  <NavDropdown.Item href="#">Internal 1</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="External Info" id="external-info-nav-dropdown">
                  <NavDropdown.Item href="#">External 1</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Master" id="master-nav-dropdown">
                  <NavDropdown.Item href="#">Master 1</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="align-items-center">
                <Nav.Link href="#" className="me-3">Quick Action</Nav.Link>
                <Nav.Link href="#" className="me-3">External Link</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;

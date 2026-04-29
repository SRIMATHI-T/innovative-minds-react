import React from 'react';
import { Navbar as BSNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const CustomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow-sm">
      <BSNavbar.Brand as={Link} to="/">
        INNOVATIVE MINDS OF NATIONS
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
            Home
          </Nav.Link>
          <NavDropdown title="Awards" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/physics">
              Physics
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/chemistry">
              Chemistry
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/medicine">
              Medicine
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/literature">
              Literature
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/peace">
              Peace
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/economic-sciences">
              Economic Sciences
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          {user ? (
            <>
              <Nav.Link disabled>
                Welcome, {user.username}
              </Nav.Link>
              <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
            </>
          )}
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default CustomNavbar;

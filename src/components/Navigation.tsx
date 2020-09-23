import React from 'react';
import { Navbar } from 'react-bootstrap';;

const Navigation = () => {
  return (
  <Navbar bg="dark"  expand="lg" variant="dark">
    <Navbar.Brand href="/">Asset Graph Framework</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Navigation;
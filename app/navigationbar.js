"use client"
import { Navbar, Nav, Container } from 'react-bootstrap';
function Navigation() {
  return (
    <Navbar bg="transparent" variant="black" expand="lg" className="justify-between mt-5 mb-5">
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/aboutme">About</Navbar.Brand>
        <Navbar.Brand href="/skills">Skills</Navbar.Brand>
        <Navbar.Brand href="/education">Education</Navbar.Brand>
        <Navbar.Brand href="/contact">Contact</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

import React from 'react';
import Navbar, { Brand, Header } from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default function() {
  return (
    <Navbar>
      <Header>
        <Brand>
          <a href="#">🍺+🍺=🍻</a>
        </Brand>
      </Header> 

      <Nav>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </Navbar>
  );
}


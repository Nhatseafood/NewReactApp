import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
             <Navbar.Header>
               <Navbar.Toggle/>
             </Navbar.Header>
             <Navbar.Collapse>
                 <Nav >
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/search" to="/search">
                        Search
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>                
            </Navbar>

        )
    }
}


export default CustomNavbar;
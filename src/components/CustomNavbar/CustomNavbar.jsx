import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './CustomNavbar.css';

/**
 * @desc CustomNavbar Component.
 * @author Adrián Álvarez C.
 * @access public
 * @version 0.0.1
 * @extends {Component}
 */
export default class CustomNavbar extends Component {

  render() {
    return (
      <div>
        <Navbar dark={true} color={"dark"} expand="md" >
          <NavbarBrand href="/#/foodtrucks">Food Trucks</NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/#/foodtrucks">Food Trucks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/near">Near Food Trucks</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

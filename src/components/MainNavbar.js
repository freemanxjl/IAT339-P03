import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


//Check if homepage for NavLink use, else we will always have an underline under 'Home'
const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if(!location) return false;
  const {pathname} = location;
  return pathname === "/";
}

function MainNavbar(props) {
  const [expanded, setExpanded] = useState(false);

  return (
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" expanded={expanded}>
          <Navbar.Brand>
            <Link className="site-title nav-props" to="/">
              FREEMAN LIU
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto"/>
            <Nav>
            <NavLink className="nav-link-button nav-props" activeClassName="underline" to="/style-guide" onClick={() => setExpanded(false)}>Style Guide</NavLink>
            <NavLink className="nav-link-button nav-props" activeClassName="underline" to="/contact" onClick={() => setExpanded(false)}>Contact</NavLink>
            <NavLink className="nav-link-button nav-props" activeClassName="underline" to="/about" onClick={() => setExpanded(false)}>About</NavLink>
            <NavLink className="nav-link-button nav-props" activeClassName="underline" isActive={checkActive} to="/" onClick={() => setExpanded(false)}>Portfolio</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default MainNavbar;
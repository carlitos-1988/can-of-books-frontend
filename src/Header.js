import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {/* <NavItem><Link to="/" className="nav-link">Home</Link></NavItem> */}
        {/* PLACEHOLDER: render a navigation link to the about page */}
        {/* <NavItem><Link to="/about" className="nav-link">About</Link></NavItem> */}
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
        </Nav>
      </Navbar>
    )
  }
}

export default Header;

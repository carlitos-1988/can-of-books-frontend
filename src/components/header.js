import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import "../App.css";

const ProfileDropdown = () => {
    const { user, isAuthenticated, logout } = useAuth0();

    return (
        isAuthenticated && (
            <NavDropdown
                title={
                    <img
                        className="profile-image"
                        src={user.picture}
                        alt={user.name}
                        width="70"
                        height="70"
                    />
                }
                id="profile-nav-dropdown"
            >
                <NavDropdown.Item disabled>{user.name}</NavDropdown.Item>
                <NavDropdown.Item disabled>{user.email}</NavDropdown.Item>
                <NavDropdown.Item disabled>{user['https://medicalendar.netlify.app/employee_id']}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Log Out
                </NavDropdown.Item>
            </NavDropdown>
        )
    );
};

class Header extends Component {
    render() {
        return (
            <>
                <Navbar className="my-header" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">MediCalendar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/addEmployee">Add Employee</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/viewEmployees">View Employees</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/displayCalendar">Scheduling</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav className="ms-auto">
                            <ProfileDropdown />
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;

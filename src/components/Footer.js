import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component{

    render(){
        return(
            <Navbar>
            <Container>
              <Navbar.Brand href="#home">MediCalendar &copy; 2023 | All Rights Reserved</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Made Lovingly with React
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default Footer;
import { Component } from "react";
import "tachyons";
import { Flex, Box, CallToAction, Section } from "react-landing-page";
import { Link } from "react-router-dom";
import myVideo from "../assets/MediCalVideo.mp4";
import "../Body.css";

class Body extends Component {
    render() {
      return (
        <>
          <Section>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{
                height: "100vh",
              }}
            >
              <Box width="100%" textAlign="center">
                <video className="video" src={myVideo} playsInline autoPlay muted loop />
              </Box>
              <Box mt={300}>
                <Flex flexDirection="row" alignItems="center">
                  <Link to="/displayCalendar" className="cta-link">
                    <CallToAction className="call-to-action call-to-action-scheduling" bg="grey" mr={3}>
                      Start Scheduling
                    </CallToAction>
                  </Link>
                  <Link to="/addEmployee" className="cta-link">
                    <CallToAction className="call-to-action call-to-action-add-employee">
                      Add an Employee
                    </CallToAction>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Section>
        </>
      );
    }
  }
  
  export default Body;
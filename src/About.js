import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return(
    <>
    <Card className="text-center">
      <Card.Header>Developer</Card.Header>
      <Card.Body>
        <Card.Title>Heather Holocomb</Card.Title>
        <Card.Text>
          Experienced product leader turned software developer located in Los Angeles, CA. Focused on creating real value for customers with great experiences. Studying full-stack software development at CodeFellows and looking for my next role on a product engineering team.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Contributor</Card.Footer>
    </Card>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Juan Olmedo</Card.Title>
        <Card.Text>
          Software developer from Los Angeles California. Currently studying at CodeFellows in full stack software development. Prior Airforce and currenlty work in the Aerospace sector as a Softwre Development Analyst. 
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Contributor</Card.Footer>
    </Card>
    </>
  )}
};

export default Profile;

import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Image } from "react-bootstrap";
import React from "react";



class About extends Component {

    render() {         
        
        const cardStyle = {
            display: "flex",
            marginBottom: "20px",
            marginLeft: "5px",
            marginRight: "5px",
            width: "18rem",
            backgroundColor: "black",
        };

        const aboutContainer = {
            minHeight: '100vh',
            padding: '10px',
            backgroundColor: "black",
            maxWidth: "100%",
            margin: "0 auto",
            // marginTop: "50px",
            color: "black",
            marginColor: "black",
        };

        const cardImage = {
            width: "90%",
            borderRadius: ".5%",
            margin: "0 auto",
        };        

        const cardTitle = {
            fontSize: "25px",
            fontFamily: "'Alex Brush', 'Cormorant Garamond', cursive",
            color: "white",
        };

        const cardText = {
            marginTop: "-120px",
            fontFamily: "Montserrat",
            fontSize: "20px",
            color: "white",
        };
        const ourTeam = {
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            marginTop: "80px",
            marginBottom: "40px",
            fontFamily: "Montserrat",
            fontSize: "60px",
        };

        return (

            <>
                <div style={aboutContainer}>
                    <div style={ourTeam}>
                        <p>Our Team</p>
                    </div>
                    <div style={aboutContainer}>
                        <CardGroup>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/121666413?v=4" style={cardImage} />
                                <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "0" }}>
                                    <Card.Title style={cardTitle}>Jeanette Leyva</Card.Title>
                                    <Card.Text style={cardText}>
                                        I am a student currently studying software development and my focus is on JavaScript.
                                        I am passionate about building web applications and interactive experiences that are both intuitive and visually appealing.
                                        My passions are: Art, Video games, and software development.
                                    </Card.Text>
                                    <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                        <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                                    </a>
                                    <a href="https://github.com/JCLEYVA">
                                        <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                                    </a>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/Coff23" style={cardImage} />
                                <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px" }}>
                                    <Card.Title style={cardTitle}> Joshua Coffey</Card.Title>
                                    <Card.Text style={cardText}>
                                        I am a highly motivated developer who loves creating user friendly websites that make the users experience enjoyable.{' '}
                                    </Card.Text>
                                    <a href="https://www.linkedin.com/in/joshuacoffey23/">
                                        <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }}></Image>
                                    </a>
                                    <a href="https://github.com/Coff23">
                                        <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>

                                    </a>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/K1ng-T0ast" style={cardImage} />
                                <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px" }}>
                                    <Card.Title style={cardTitle}> Kyle White</Card.Title>
                                    <Card.Text style={cardText}>
                                        Software developer skilled in the dart arts of HTML, JavaScript, CSS, Node.js, ExpressJS, MongoDB, Auth0, ReactJS, Sass, VS Code, Git, among others. Passionate about making software that assists those who may be most in need and has an affinity for design. Keeper of a growth mindset and an understanding that there is always more we can learn about ourselves along with the world we inhabit.
                                    </Card.Text>
                                    <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                        <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                                    </a>
                                    <a href="https://github.com/K1ng-T0ast">
                                        <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                                    </a>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/43771360?v=4" style={cardImage} />
                                <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px" }}>
                                    <Card.Title style={cardTitle}>Juan Olmeda</Card.Title>
                                    <Card.Text style={cardText}>
                                    Highly motivated developer skilled Java, JavaScript, CSS, HTML, Eclipse, Spring Tool Suite 4, VsCode, and Git. My recent projects demonstrate proficiency in OOP, React JS, Node, and MongoDB. Currently, I'm a Software Development Analyst for Northrop Grumman Corp, providing Atlassian tool suite support/data and engineering software lifecycle document maintenance. Previously, I worked as a Quality Engineer for Jet Propulsion Laboratory, ensuring JPL Critical Items' compliance and delivery of 10+ flight items for the 2020 Mars Exploration rover. I aim to expand my skills and deliver high-quality systems and app software.
                                    </Card.Text>
                                    <a href="https://www.linkedin.com/in/juan-olmedo-5613784a/">
                                        <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                                    </a>
                                    <a href="https://github.com/carlitos-1988">
                                        <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                                    </a>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </>
        )
    }
};

export default About;
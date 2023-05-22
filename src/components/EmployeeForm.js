import { Component } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import axios from 'axios'

class EmployeeForm extends Component {

    handleEmployeeSubmit = (event) => {
        event.preventDefault();
        let employeeObj = {
            firstName: event.target.fName.value,
            lastName: event.target.lName.value,
            employeeId: event.target.employeeId.value,
            email: event.target.email.value,
            level: event.target.employeeLevel.value
        }

        console.log(employeeObj);

        this.postEmployee(employeeObj);


    }

    postEmployee = async (employeeObj) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/postemployee`;

            await axios.post(url, employeeObj);

            console.log('Employee added to database with no errors');

        } catch (e) {
            console.log(e.message);
        }
    }


    render() {
        return (
            <>
                <div>
                    <h1 style={{ marginTop: "50px", textAlign: "center", marginBottom: "5px" }}>Add Employee</h1>
                </div>
                <Container style={{ minHeight: "100vh" }}>
                    <Row className="justify-content-center align-items-center" style={{ height: "100%" }}>
                        <Col md="auto">
                            <Form
                                style={{ margin: '50px', padding: '0', maxWidth: "800px" }}
                                onSubmit={this.handleEmployeeSubmit}
                            >
                                <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="fName" noGutters>
                                    <Col sm={3} md={4}>
                                        <Form.Label className="text-right" style={{ width: '100%', paddingRight: '0px' }}>
                                           <b>First Name:</b>
                                        </Form.Label>
                                    </Col>
                                    <Col sm={9} md={8}>
                                        <Form.Control type="text" placeholder="Jane" style={{ width: "400px" }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="lName" noGutters>
                                    <Col sm={3} md={4}>
                                        <Form.Label className="text-right" style={{ width: '100%', paddingRight: '1px' }}>
                                            <b>Last Name:</b>
                                        </Form.Label>
                                    </Col>
                                    <Col sm={9} md={8}>
                                        <Form.Control type="text" placeholder="Doe" style={{ width: "400px" }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="email" noGutters>
                                    <Col sm={3} md={4}>
                                        <Form.Label className="text-right" style={{ width: '100%', paddingRight: '5px' }}>
                                            <b>Employee E-Mail:</b>
                                        </Form.Label>
                                    </Col>
                                    <Col sm={9} md={8}>
                                        <Form.Control type="text" placeholder="Jane.Doe@ExampleHospital.org" style={{ width: "400px" }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="employeeId" noGutters>
                                    <Col sm={3} md={4}>
                                        <Form.Label className="text-right" style={{ width: '100%', paddingRight: '5px' }}>
                                            <b>Employee ID:</b>
                                        </Form.Label>
                                    </Col>
                                    <Col sm={9} md={8}>
                                        <Form.Control type="text" placeholder="12345" style={{ width: "400px" }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="justify-content-md-center mb-3" controlId="employeeLevel">
                                    <Form.Label column sm={2} className="ml-3" style={{ width: '100%', paddingRight: '15px' }}>
                                        <b>Employee Level:</b>
                                    </Form.Label>
                                    <Col sm={10} className="ml-auto">
                                        <Form.Select aria-label="Default select example" style={{ width: "405px", marginLeft: "110px" }}>
                                            <option>Select Nurse Level</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="justify-content-md-center mb-3">
                                    <Col sm={{ span: 10 }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <Button
                                                variant="success"
                                                type="submit"
                                                style={{
                                                    padding: "12px 28px",
                                                    background: "linear-gradient(45deg, #00FFA6, #00FFD4)",
                                                    color: "#fff",
                                                    border: "none",
                                                    borderRadius: "25px",
                                                    cursor: "pointer",
                                                    transition: "all 0.3s ease",
                                                    marginTop: "20px",
                                                    fontWeight: "bold",
                                                    fontSize: "20px"
                                                }}
                                            >
                                                Save User
                                            </Button>
                                        </div>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default EmployeeForm;
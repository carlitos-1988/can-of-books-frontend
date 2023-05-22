import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class UpdateEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.employee.firstName,
            lastName: this.props.employee.lastName,
            employeeId: this.props.employee.employeeId,
            email: this.props.employee.email,
            level: this.props.employee.level,
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleEmployeeUpdate = (event) => {
        event.preventDefault();
        let updatedEmployeeObj = {
            _id: this.props.employee._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            employeeId: this.state.employeeId,
            email: this.state.email,
            level: this.state.level,
        };
        this.props.onUpdate(updatedEmployeeObj);
    };

    render() {
        const { employee } = this.props;

        if (!employee) {
            return <div>Please Select Employee to Update</div>;
        }

        return (
            <>
                <Form onSubmit={this.handleEmployeeUpdate}>
                    <Form.Group as={Row} className="mb-3" controlId="fName">
                        <Form.Label column sm={2}>
                            First Name:
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Jane"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="lName">
                        <Form.Label column sm={2}>
                            Last Name:
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Doe"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>
                            Email:
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Jane.Doe@ExampleHospital.org"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="employeeId">
                        <Form.Label column sm={2}>
                            Employee ID:
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="employeeId"
                                placeholder="12345"
                                value={this.state.employeeId}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="employeeLevel">
                        <Form.Label column sm={2}>
                            Employee Level:
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Select
                                aria-label="Default select example"
                                name="level"
                                value={this.state.level}
                                onChange={this.handleInputChange}
                            >
                                <option>Select Employee Level</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Button
                    style={{
                        padding: "12px 24px",
                        background: "linear-gradient(45deg, #00FFA6, #00FFD4)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        marginLeft: "20px"
                    }}
                    type="submit">
                        Update Employee
                    </Button>
                </Form>
            </>
        );
    }
}

export default UpdateEmployeeForm;
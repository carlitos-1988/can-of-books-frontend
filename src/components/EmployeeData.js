import axios from "axios";
import { Component } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import DeleteEmployeeModal from "./DeleteEmployee";
import UpdateEmployeeModal from "./UpdateEmployee";
import EmployeeDetailsModal from "./EmployeeDetails";



class EmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            authToken: '',
            selectedEmployee: null,
            showDeleteModal: false,
            showUpdateModal: false,
            showDetailsModal: false,
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();

            this.setState({ authToken: res.__raw });

            console.log("res obj from token:", res);
            // console.log("res from token: " + res.__raw);

            try {
                let url = `${process.env.REACT_APP_SERVER}/getallemployees`;
                let urlData = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${res.__raw}`,
                    },
                });
                this.setState({ employees: urlData.data });
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        }
    };

    handleDeleteModalClose = () => {
        this.setState({ showDeleteModal: false });
    };

    handleUpdateModalClose = () => {
        this.setState({ showUpdateModal: false });
    };

    handleDetailsModalOpen = (employee) => {
        this.setState({ showDetailsModal: true, selectedEmployee: employee });
    };

    handleDetailsModalClose = () => {
        this.setState({ showDetailsModal: false });
    };

    updateEmployee = async (employeeToUpdate) => {
        console.log("Updating employee:", employeeToUpdate);
        try {
            let url = `${process.env.REACT_APP_SERVER}/employee/${employeeToUpdate._id}`;
            let urlUpdate = await axios.put(url, employeeToUpdate);
            let updatedEmployeeArr = this.state.employees.map(existingEmployee => {
                return existingEmployee._id === employeeToUpdate._id ? urlUpdate.data : existingEmployee
            })
            this.setState({ employees: updatedEmployeeArr });
            this.handleUpdateModalClose();
            window.location.reload();
            this.getEmployees();
        } catch (error) {
            console.log(error.message);
        }
    };

    deleteEmployee = async (employeeToDelete) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/employee/${employeeToDelete._id}`;
            await axios.delete(url);
            let updatedEmployees = this.state.employees.filter(employee => employee._id !== employeeToDelete._id)
            this.setState({ employees: updatedEmployees });
        } catch (error) {
            console.log(error.message)
        }
    };

    render() {
        return (
            <>
                <div className="employee-header">
                    <h1>Employee Database</h1>
                    <h6>Click on an Employee Card for Full Data</h6>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                    marginTop: "15px",
                }}>
                    <Button className="employee-btn"
                        onClick={() => this.setState({ showDeleteModal: true })}
                        style={{
                            padding: "12px 24px",
                            background: "linear-gradient(45deg, #FF8A00, #FF0080)",
                            border: "none",
                            borderRadius: "25px",
                            color: "#fff",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            fontWeight: "bold",
                        }}
                    >
                        Delete Employee
                    </Button>
                    <Button className="employee-btn"
                        onClick={() => this.setState({ showUpdateModal: true })}
                        style={{
                            padding: "12px 24px",
                            background: "linear-gradient(45deg, #00FFA6, #00FFD4)",
                            border: "none",
                            borderRadius: "25px",
                            color: "#fff",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginRight: "25px",
                            fontWeight: "bold",
                        }}
                    >
                        Update Employee
                    </Button>
                </div>

                <Container style={{ marginTop: "10px" }}>
                    <Row>
                        {this.state.employees.map((employee, index) => (
                            <Col xs={6} md={3} key={index}>
                                <Card
                                    border="info"
                                    style={{ margin: 10 }}
                                    key={index}
                                    onClick={() => this.handleDetailsModalOpen(employee)}
                                >
                                    <Card.Header><b>{employee.firstName} {employee.lastName}</b></Card.Header>
                                    <Card.Body><b>Nurse Level:</b> {employee.level}</Card.Body>
                                    <Card.Body></Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <EmployeeDetailsModal
                    show={this.state.showDetailsModal}
                    onHide={this.handleDetailsModalClose}
                    employee={this.state.selectedEmployee}
                />
                <DeleteEmployeeModal
                    show={this.state.showDeleteModal}
                    onHide={this.handleDeleteModalClose}
                    employees={this.state.employees}
                    selectedEmployee={this.state.selectedEmployee}
                    onSelectEmployee={e => this.setState({ selectedEmployee: this.state.employees[e.target.value] })}
                    onDelete={this.deleteEmployee}
                />
                <UpdateEmployeeModal
                    show={this.state.showUpdateModal}
                    onHide={this.handleUpdateModalClose}
                    employees={this.state.employees}
                    selectedEmployee={this.state.selectedEmployee}
                    onSelectEmployee={e => this.setState({ selectedEmployee: this.state.employees[e.target.value] })}
                    onUpdate={updatedInfo => this.updateEmployee({ ...this.state.selectedEmployee, ...updatedInfo })}
                />

            </>
        )
    }
}

export default withAuth0(EmployeeData);
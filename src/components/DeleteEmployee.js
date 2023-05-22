import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class DeleteEmployeeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteConfirm: false,
        };
    }

    handleDeleteConfirm = () => {
        this.setState({ showDeleteConfirm: true });
    };

    handleCancelDelete = () => {
        this.setState({ showDeleteConfirm: false });
    };

    handleConfirmDelete = () => {
        this.props.onDelete(this.props.selectedEmployee);
        this.setState({ showDeleteConfirm: false });
        this.props.onHide();
    };

    render() {
        const { show, onHide, employees, selectedEmployee, onSelectEmployee } = this.props;
        const { showDeleteConfirm } = this.state;

        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!showDeleteConfirm ? (
                        <>
                            <select onChange={onSelectEmployee} value={employees.indexOf(selectedEmployee)}>
                                <option>Select Employee</option>
                                {employees.map((employee, index) => (
                                    <option key={index} value={index}>
                                        {employee.firstName} {employee.lastName}
                                    </option>
                                ))}
                            </select>
                            <Button
                            onClick={this.handleDeleteConfirm}
                            style={{
                                padding: "12px 24px",
                                background: "linear-gradient(45deg, #FF8A00, #FF0080)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "25px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                marginLeft: "20px"
                            }}
                            >
                                Delete
                                </Button>
                        </>
                    ) : (
                        <>
                            <p>Are you sure you want to delete {selectedEmployee.firstName} {selectedEmployee.lastName}?</p>
                            <Button
                            onClick={this.handleConfirmDelete}
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
                            >
                                Confirm
                                </Button>
                            <Button
                            onClick={this.handleCancelDelete}
                            style={{
                                padding: "12px 24px",
                                background: "linear-gradient(45deg, #FF8A00, #FF0080)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "25px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                marginLeft: "20px"
                            }}
                            >
                                Cancel
                                </Button>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        );
    }
}

export default DeleteEmployeeModal;

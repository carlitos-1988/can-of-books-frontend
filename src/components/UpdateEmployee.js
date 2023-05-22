import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import UpdateEmployeeForm from "./UpdateEmployeeForm";

class UpdateEmployeeModal extends Component {
    render() {
        const { show, onHide, employees, selectedEmployee, onSelectEmployee, onUpdate } = this.props;
        return (
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select onChange={onSelectEmployee} value={employees.indexOf(selectedEmployee)}>
                        <option>Select Employee</option>
                        {employees.map((employee, index) => (
                            <option key={index} value={index}>{employee.firstName} {employee.lastName}</option>
                        ))}
                    </Form.Select>
                    {selectedEmployee && (
                        <UpdateEmployeeForm
                            key={selectedEmployee._id}
                            employee={selectedEmployee}
                            onUpdate={onUpdate}
                        />
                    )}
                </Modal.Body>
            </Modal>
        );
    }
}

export default UpdateEmployeeModal;

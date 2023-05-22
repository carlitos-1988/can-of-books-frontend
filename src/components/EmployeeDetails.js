import React from "react";
import { Modal, Button } from "react-bootstrap";

const EmployeeDetailsModal = ({ show, onHide, employee }) => {
  if (!employee) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title><b>{employee.firstName} {employee.lastName}</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>E-Mail:</b> {employee.email}</p>
        <p><b>Employee ID:</b> {employee.employeeId}</p>
        <p><b>Nurse Level:</b> {employee.level}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeDetailsModal;

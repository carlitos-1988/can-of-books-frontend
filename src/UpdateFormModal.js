import { Component } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
// import BestBooks from './BestBooks.js';
import axios from 'axios';

class UpdateFormModal extends Component{
    render(){
        return(
            <div className="modal show">
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={this.props.show} onClose={window.location.reload}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleBookSubmit}>
                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId='status'>
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>                        
                            <Button variant="primary" type="submit" onClick={this.props.onClose}>Save</Button>
                            <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
            </div>
        )
    }
}
export default UpdateFormModal
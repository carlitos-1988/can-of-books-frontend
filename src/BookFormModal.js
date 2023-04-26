import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import BestBooks from './BestBooks.js';

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    render(){
        return(
            <div className="modal show">
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={BestBooks.handleBookSubmit}>
                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId='status'>
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Save</Button>
                        <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
            </div>
        )
    }
}

export default BookFormModal;


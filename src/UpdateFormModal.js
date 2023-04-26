import { Component } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
// import BestBooks from './BestBooks.js';
import axios from 'axios';

class UpdateFormModal extends Component{
    
    handleBookSubmit = (event) => {
        event.preventDefault();

        let bookToUpdate = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value, 
            _id: this.props.book._id,
            _v: this.props.book._v
        }

        // console.log('Book to update: ', bookToUpdate);


        this.props.updateBook(bookToUpdate);
    }
    
    updateBooks = async (bookToUpdate)=>{
        try{
            //TODO: create URL for axios:
            let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
    
            //TODO: send axios on a PUT
            await axios.put(url, bookToUpdate);

            this.props.getBooks();

        }catch(e){
            console.log(e.message);
        }
    }
    
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
                                <Form.Control defaultValue={this.props.data.title} type="text" />
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control defaultValue={this.props.data.description} type="text" />
                            </Form.Group>
                            <Form.Group controlId='status'>
                                <Form.Label>Status</Form.Label>
                                <Form.Control defaultValue={this.props.data.status} type="text" />
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
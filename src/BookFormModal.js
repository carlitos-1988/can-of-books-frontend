import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// import BestBooks from './BestBooks.js';
import axios from 'axios';

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    handleBookSubmit = (event) => {
        event.preventDefault();
    
        //TODO: Construct a book object based on form input values
    
        let bookObj = {
          title: event.target.title.value,
          description: event.target.description.value,
          status: event.target.status.value, 
        }; 
    
        console.log(bookObj);
        // TODO: send this object to my backend - use a 2nd handler 
        this.postBook(bookObj);
      }

      postBook = async (bookObj) => {
        try {
          //TODO: build my url for axios -> http://localhost:3001/books
          let url = `${process.env.REACT_APP_SERVER}/books`
    
          //TODO: pass the url and the book data into axios and store that return in a variable
          let postBooks = await axios.post(url, bookObj);
    
          //TODO: Update the state with the newly creted cat
          this.setState({
            books: [...this.state.books, postBooks.data], //spread operator 
            showModal: false,
          })
          
          console.log('postBook');
    
        } catch (error) {
          console.log(error.message);
        }
      }

    render(){
        return(
            <div className="modal show">
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={this.props.show}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Book</Modal.Title>
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

export default BookFormModal;


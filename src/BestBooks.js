import React from 'react';
import CarouselHome from './CarouselHome';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  getBooks = async () => {
    
    
    try{
      /* TODO: Make a GET request to your API to fetch all the books from the database  */

      let url = `${process.env.REACT_APP_SERVER}/books`;
      let urlData = await axios.get(url);
      
      this.setState({
        books: urlData.data
      })
        
      }catch(error){
        console.log(error);
      }
  }

  handleShowModal = () => {
    this.setState({ 
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
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


    } catch (error) {
      console.log(error.message);
    }
  }


//Lifecycle method - Once app is rendered it will make this call 
componentDidMount(){
  this.getBooks();
}
    
    
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0?
        ( <>
          <CarouselHome data={this.state.books} />
          <Button onClick={this.handleShowModal}>Create</Button>
          <BookFormModal 
            show={this.state.showModal} 
            onClose={this.handleCloseModal}
            title={this.state.data.books} 
            description={this.state.data.books} 
            status={this.state.data.books} 
            />
            </>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

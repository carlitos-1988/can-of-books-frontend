import React from 'react';
import CarouselHome from './CarouselHome';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showUpdateModal: false
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
    console.log('show modal')
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    }, () => {
      this.getBooks();
    });
  }

  //delete cats 
  deleteBook = async(bookID) => {
    try{
      //url http://localhost:3001/books/
      let url = `${process.env.REACT_APP_SERVER}/books/${bookID}`;
      console.log(url); 

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== bookID);
      this.setState({
        books: updatedBooks
      })

    }catch(error){
      console.log(error.message)
    }
  }

  handleOpenUpdateForm = ()=>{
    this.setState({
      showUpdateModal:true
    })
  }

  handleFormCloseModal = () =>{
    this.setState({
      showUpdateModal:false
    })
  }

  updateBook = async (bookToUpdate)=>{
    try{
        //TODO: create URL for axios:
        let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`

        //TODO: send axios on a PUT
        await axios.put(url, bookToUpdate);

        this.getBooks();

    }catch(e){
        console.log(e.message);
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
        <div className="d-grid gap-2">
        <Button onClick={this.handleShowModal} size="lg">
          |    Add Book    |
        </Button>
        </div>
        {this.state.books.length > 0?
        ( <>
          <CarouselHome 
          data={this.state.books} 
          deleteBook={this.deleteBook}
          updateBook={this.handleOpenUpdateForm}
          show={this.state.showUpdateModal}
          onClose={this.handleFormCloseModal}
          formUpdateBook={this.updateBook}
          getBooks={this.getBooks}
          // stateBooks = {this.state.books} 
          />
          <BookFormModal 
            show={this.state.showModal} 
            onClose={this.handleCloseModal}
            refresh={this.componentDidMount}
            getBooks={this.getBooks}
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

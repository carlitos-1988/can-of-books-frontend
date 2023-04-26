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
    console.log('show modal')
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    }, () => {
      this.getBooks();
    });
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

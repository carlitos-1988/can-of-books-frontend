import React from 'react';
import CarouselHome from './CarouselHome';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
        (
          <CarouselHome />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

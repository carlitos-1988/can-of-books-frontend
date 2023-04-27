import { Component } from "react";
import { Carousel } from "react-bootstrap";
import bookImg from './img/book.jpg';
import { Button } from "react-bootstrap";
import UpdateFormModal from "./UpdateFormModal";

class CarouselHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            selectedBook : {}
        }
    }
handleUpdate = (book)=>{
    this.props.updateBook();
    this.setState({
        selectedBook:book
    })
}


    render(){
        return(
            <>
        <Carousel>
            {this.props.data.map((slide, i) => {
            return (
                <Carousel.Item key={i} >
                <img className="d-block w-100" src={bookImg} alt="slider imageA" />
                    <Carousel.Caption>
                        <h3>Title: {slide.title}</h3>
                        <p>Description: {slide.description}</p>
                        <p>Status: {slide.status}</p>
                        <div className="d-grid gap-2">
                            <Button onClick={() => this.handleUpdate(slide)} variant="primary" size="lg">
                                Edit Book
                            </Button>
                            <Button onClick={() =>this.props.deleteBook(slide._id)} variant="primary" size="lg">
                                Remove Book
                            </Button>
                        </div>  
                    </Carousel.Caption>
                </Carousel.Item>
                );
        })}
        </Carousel>
        <UpdateFormModal
            show={this.props.show}
            onClose={this.props.onClose}
            // updateBook={this.props.updateBook}
            data={this.state.selectedBook}
            formUpdateBook={this.props.formUpdateBook}
        />
        </>
        );
    }


}

export default CarouselHome;
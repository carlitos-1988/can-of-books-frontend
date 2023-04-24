import { Component } from "react";
import { Carousel } from "react-bootstrap";
import bookImg from './img/book.jpg';

class CarouselHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    handleSelect(selectedIndex, e){
        this.state({
            index: selectedIndex
        });
    }
    render(){
        return(
            <>
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            {this.props.data.map((slide, i) => {
            return (
                <Carousel.Item key={i}>
                <img className="d-block w-100" src={bookImg} alt="slider imageA" />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                );
        })}
        </Carousel>
        </>
        );
    }


}

export default CarouselHome;
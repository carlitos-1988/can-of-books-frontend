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

        {/* <p>{this.props.data.map(value =>{
            return(
                <>
                <p>{value._id}</p>
                <p>{value.title}</p>
                <p>{value.description}</p>
                </>
            )
        })}</p> */}
        {/* <p>{this.props.data_id}</p>
        <p>{this.props.data_id}</p> */}
        {/* activeIndex={this.state.index} onSelect={this.handleSelect} */}
        <Carousel >
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
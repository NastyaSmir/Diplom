import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import backgroundImg from '../assets/4.jpg';
import backgroundImg2 from '../assets/5.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backgroundImg}
                    />
                    <Carousel.Caption>
                        <h3>Автомобильные грузоперевозки по всей стране</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backgroundImg2}
                    />
                    <Carousel.Caption>
                        <h3>Автомобильные грузоперевозки по всей стране</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}   
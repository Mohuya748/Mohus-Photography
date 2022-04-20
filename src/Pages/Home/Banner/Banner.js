// BAnner component

import React from 'react';
import { Carousel } from 'react-bootstrap';
import top from '../../../images/top.jpg'
import top1 from '../../../images/top1.jpg'
import top2 from '../../../images/top2.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={top}
                    alt="banner1"
                />
                <Carousel.Caption>
                    <h3>Mohu's Photography</h3>
                    <p>Contact us for a great experience of your photos!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={top1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Mohu's Photography</h3>
                    <p>Contact us for a great experience of your photos!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={top2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Mohu's Photography</h3>
                    <p>Contact us for a great experience of your photos!!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
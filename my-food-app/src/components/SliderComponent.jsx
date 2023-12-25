//import React from 'react';
import Slider from 'react-slick';
import "./SliderComponent.css"

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="slide1.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="slide2.jpg" alt="Slide 2" />
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;
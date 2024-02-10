import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>

                <div><img src="https://via.placeholder.com/1900x400" alt="Slide 1"/></div>
                <div><img src="https://via.placeholder.com/1900x400" alt="Slide 2"/></div>
                <div><img src="https://via.placeholder.com/1900x400" alt="Slide 3"/></div>

            </Slider>
        </div>
    );
};

export default SliderComponent;
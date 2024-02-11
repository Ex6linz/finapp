import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import './Slider.css'


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "green" }}
            onClick={onClick}
        />
    );
}


const SliderComponent = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,


    };


    return (
        <div>

            <div className="slider-container">


                <Slider {...settings}>

                    <div><img src="https://via.placeholder.com/1920x400" alt="Slide 1"/></div>
                    <div><img src="https://via.placeholder.com/1920x400" alt="Slide 2"/></div>
                    <div><img src="https://via.placeholder.com/1920x400" alt="Slide 3"/></div>

                </Slider>

            </div>

        </div>
    );
};

export default SliderComponent;
import React, { useState } from 'react';
import './Slider.css'; // Upewnij się, że masz zaimportowany odpowiedni plik CSS

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slider-container">
            {/* Dodaj klasę 'previous' do tego przycisku */}
            <button className="previous" onClick={goToPrevious}>{"<"}</button>
            <div className="slider-content">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            {/* Dodaj klasę 'next' do tego przycisku */}
            <button className="next" onClick={goToNext}>{">"}</button>
            <button className="previous" onClick={goToPrevious}>{"<"}</button>
        </div>
    );
};

export default Slider;
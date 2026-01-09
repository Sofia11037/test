import { useState } from "react";
import sliderData from "./catalog.json";
import "./slider.scss"

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider">
            <img className="img" src={sliderData[currentIndex].img} alt={`slide-${sliderData[currentIndex].id}`} />
            <div className="about-slider">
                <h3 className="title">{sliderData[currentIndex].title}</h3>
                <p className="which">0{currentIndex + 1} / 05</p>
            </div>
            <div className="arrows">
                <div className="prev" onClick={prevSlide}><img src="./src/assets/icons/left.svg" alt="" /></div>
                <div className="next" onClick={nextSlide}><img src="./src/assets/icons/right.svg" alt="" /></div>
            </div>
        </div>
    );
}


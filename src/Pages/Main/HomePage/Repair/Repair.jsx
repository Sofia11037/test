import './repair.scss'
import Slider1 from '../../../../assets/images/slider.png'
import Slider2 from '../../../../assets/images/slider2.jpg'
import Slider3 from '../../../../assets/images/slider3.jpg'
import Slider4 from '../../../../assets/images/slider4.jpg'
import Slider5 from '../../../../assets/images/project1.png'
import leftArrow from '../../../../assets/icons/left.svg'
import rightArrow from '../../../../assets/icons/right.svg'

import { useState } from "react";


export default function Repair() {

  const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
    return (
        <div className="repair">
          <div className="slider__repair">
            <div className="slide__repair">
              <img className='img' src={slides[activeSlide]} alt={`Slide ${activeSlide}`} />
            </div>
              <div className="arrows___repair">
                <div className="prev" onClick={prevSlide}><img src={leftArrow} alt="" /></div>
                <div className="next" onClick={nextSlide}><img src={rightArrow} alt="" /></div>
              </div>            
          </div>
          <div className="about">
            <div className="desc">
              <h3 className="title__desc">Ремонт квартиры в Москве и области</h3>
              <p className="txt__desc">Фиксированная смета и сроки работ по доступной цене</p>
            </div>  
            <div className="num_slider">0{activeSlide + 1} / 05</div>
          </div>
          <div className="arrows-phone">
            <div className="content__arrow-phone">
              <div className="prev" onClick={prevSlide}><img src={leftArrow} alt="" /></div>
              <div className="next" onClick={nextSlide}><img src={rightArrow} alt="" /></div>
            </div>
              
            <div className="num_slider-phone">0{activeSlide + 1} / 05</div>
          </div>
        </div>
    );
  }
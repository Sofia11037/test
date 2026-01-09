import './clients_about_us.scss';
import leftArrow from '/src/assets/icons/left.svg';
import rightArrow from '/src/assets/icons/right.svg';
import Slider from './Slider/slider';
import data from './videos.json';
import { useState, useEffect } from 'react';

export default function ClientsAboutUs() {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

    function getItemsPerSlide() {
        return window.innerWidth < 913 ? 1 : 2;
    }

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - itemsPerSlide;
            return newIndex < 0 ? Math.max(0, data.length - itemsPerSlide) : newIndex;
        });
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex + itemsPerSlide;
            return newIndex >= data.length ? 0 : newIndex;
        });
    };

    const currentSlides = data.slice(startIndex, startIndex + itemsPerSlide);

    return (
        <div className="clients-about-us">
            <div className="content">
                <div className="box-left">
                    <h2 className="title">Клиенты о нас</h2>
                    <p className="txt">Вот несколько историй от людей, которые доверили нам своё жильё.</p>
                </div>
                <div className="arrows">
                    <div className="left" onClick={handlePrev}>
                        <img src={leftArrow} alt="prev" />
                    </div>
                    <div className="right" onClick={handleNext}>
                        <img src={rightArrow} alt="next" />
                    </div>
                </div>
            </div>
            <div className="box-to-center">
            <div className="slider">
                {currentSlides.map(slide => (
                    <Slider key={slide.id} data={slide} />
                ))}
            </div>
            <div className="content-phone">
                <div className="arrows">
                    <div className="left" onClick={handlePrev}>
                        <img src={leftArrow} alt="prev" />
                    </div>
                    <div className="right" onClick={handleNext}>
                        <img src={rightArrow} alt="next" />
                    </div>
                </div>
                <div className="box-right">
                    <p className="txt">0{startIndex + 1}/04</p>
                </div>
            </div>
            </div>
            

        </div>
    );
}

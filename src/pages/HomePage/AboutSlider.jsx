import { useEffect, useState } from "react";

const AboutSlider = ({ images, parentClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateSlide = {
    transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 12}px))`,
  };
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`about__content ${parentClass} slider`}>
      <div className="about__content-slides slider__slides">
        <div
          className="about__content-slide slider__slide"
          style={translateSlide}
        >
          {images.map((image) => (
            <img
              className="about__content-img"
              key={image.id}
              src={image.src}
              style={{ width: `${100 / 3}%` }}
              alt=""
            />
          ))}
        </div>
        <div className="about__content-decor decor">
          <div className="decor__line line-orange"></div>
          <div className="decor__line line-beige"></div>
          <div className="decor__line line-blue"></div>
        </div>
      </div>

      <button className="slider__btn btn-prev" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="slider__btn btn-next" onClick={nextSlide}>
        {">"}
      </button>

    </div>
  );
};

export default AboutSlider;

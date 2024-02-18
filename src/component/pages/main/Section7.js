import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide0 from "../../resources/slide/slide0.jpg"
import slide1 from "../../resources/slide/slide1.jpg"
import slide2 from "../../resources/slide/slide2.jpg"
import slide3 from "../../resources/slide/slide3.jpg"
import slide4 from "../../resources/slide/slide4.jpg"
import slide5 from "../../resources/slide/slide5.jpg"

const Section7 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='slideR'>
    <Slider {...settings}>
      <div>
        <img src = {slide0} alt="Slide 1" />
      </div>
      <div>
        <img src={slide1}  alt="Slide 2" />
      </div>
      <div>
        <img src= {slide2}  alt="Slide 3" />
      </div>
      <div>
        <img src = {slide3} alt="Slide 4" />
      </div>
      <div>
        <img src={slide4}  alt="Slide 5" />
      </div>
      <div>
        <img src= {slide5}  alt="Slide 6" />
      </div>
    </Slider>
    </div>
  );
};

export default Section7



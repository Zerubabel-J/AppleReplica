import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../resources/slide/slide0.jpg";
import image2 from "../resources/slide/slide1.jpg";
import image3 from "../resources/slide/slide2.jpg";
import image4 from "../resources/slide/slide3.jpg";
import image5 from "../resources/slide/slide4.jpg";
import image6 from "../resources/slide/slide5.jpg";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slides = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings} autoplay={true} autoplaySpeed={2000}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="slideImage"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Slide;

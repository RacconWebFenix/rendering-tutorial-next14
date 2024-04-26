"use client";

import Slider from "react-slick";

export default function ImageSlider() {
  var settings = {
    dots: true,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" alt="1" />
        </div>
      </Slider>
    </div>
  );
}

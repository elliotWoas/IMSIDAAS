import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const testimonialsData = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus nulla alias magnam molestiae voluptatem quo molestias, sequi voluptas eaque dicta, accusantium exercitationem harum enim quos fuga inventore et culpa!",
    name: "John Doe",
    role: "Customer",
    image: ava01,
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus nulla alias magnam molestiae voluptatem quo molestias, sequi voluptas eaque dicta, accusantium exercitationem harum enim quos fuga inventore et culpa!",
    name: "Lia Franklin",
    role: "Customer",
    image: ava02,
  },
  {
    id: 3,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus nulla alias magnam molestiae voluptatem quo molestias, sequi voluptas eaque dicta, accusantium exercitationem harum enim quos fuga inventore et culpa!",
    name: "John Doe",
    role: "Customer",
    image: ava03,
  },
  {
    id: 4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus nulla alias magnam molestiae voluptatem quo molestias, sequi voluptas eaque dicta, accusantium exercitationem harum enim quos fuga inventore et culpa!",
    name: "Lia Franklin",
    role: "Customer",
    image: ava02,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialsData.map((testimonial) => (
        <div className="testimonial py-4 px-3" key={testimonial.id}>
          <p>{testimonial.text}</p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src={testimonial.image}
              className="w-25 h-25 rounded-8"
              alt=""
            />
            <div>
              <h6 className="mb-0 mt-4">{testimonial.name}</h6>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
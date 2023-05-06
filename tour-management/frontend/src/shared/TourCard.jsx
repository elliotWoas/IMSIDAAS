// our featured tours, home page

import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, avgRating, reviews } = tour;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          <span>Featured</span>
        </div>
        <CardBody>
          <div
            className="card__top d-flex align-items-center 
        justify-content-between"
          >
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>{" "}
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {avgRating}{" "}
              <span>({reviews.length})</span>
            </span>
          </div>
          {/* name title location  in the box */}
          <h6 className="tour__title">
            <Link to={`/tour/${id}`}>{title}</Link>
          </h6>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h6>
              ${price} <span>/per person</span>
            </h6>
            <button className="btn booking__btn">
              <Link to={`/tour/${id}`}>
                <h6>Book Now</h6>
              </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;

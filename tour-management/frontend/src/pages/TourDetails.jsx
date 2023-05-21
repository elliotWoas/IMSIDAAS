import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, From, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";

const TourDetails = () => {
  const {id} = useParams();

  //this is an static data later we will call our API and load our data from database
  const tour = tourData.find((tour) => tour.id === id);

  // destructure properties from tour object
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } =
    tour;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;

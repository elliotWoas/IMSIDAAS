import React, {useState} from "react";

import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";

const SearchResultList = () => {

  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;

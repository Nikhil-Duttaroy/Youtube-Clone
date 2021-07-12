import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryBar from "./../../components/CategoryBar/CategoryBar.component";
import Video from './../../components/Video/Video.component';

const Homepage = () => {
  return (
      <Container>
        <CategoryBar/>
        <Row >
       {[...new Array(10)].map(() => (
            <Col lg={3} md={4}>
                <Video/>
            </Col>
        ))}

        </Row>
      </Container>
  );
};

export default Homepage;

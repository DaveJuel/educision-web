import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

class AppHero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            {/* Background Shape */}
            <div className="shape shape-style-1 bg-gradient-secondary">
              <img
                alt="Background"
                style={{ width: "100%" }}
                src={require("assets/img/theme/herobg.png")}
              />
            </div>
            <Container className="d-flex align-items-left py-lg">
              <Row className="align-items-left justify-content-left">
                {/* Hero Text and Buttons */}
                <Col lg="6" className="text-left">
                  <h1 className="display-4 text-dark font-weight-bold"
                     style={{ fontSize: "3.5rem", lineHeight: "1.2" }}>
                    Easing Education Search For ALL
                  </h1>
                  <div className="btn-wrapper mt-4">
                    <Button
                      color="primary"
                      size="lg"
                      className="mb-3 w-100 text-left"
                    >
                      I am a parent looking for a school for my child
                    </Button>
                    <Button
                      color="primary"
                      size="lg"
                      className="mb-3 w-100 text-left"
                    >
                      I am a student looking for what to study
                    </Button>
                    <Button
                      color="primary"
                      size="lg"
                      className="mb-3 w-100 text-left"
                    >
                      I work at an educational institution
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* Bottom Separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default AppHero;

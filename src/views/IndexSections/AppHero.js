import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Input, FormGroup, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

class AppHero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            <div className="shape shape-style-1 bg-gradient-secondary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h3 className="mb-0">YOUR ONE STOP HUB FOR</h3>
                    <h2 className="mb-0">ALL SCHOOLS IN RWANDA</h2>
                    <p className="lead text-primary">
                    Getting the right school is a critical decision We make it easy to find and apply to the perfect one.
                    </p>
                    <Col md="12">
                      <FormGroup >
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-zoom-split-in" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Search" type="text" />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <div className="btn-wrapper mt-3">
                      <Button
                        className="btn-default btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="sm"
                      >
                        <span className="btn-inner--text">Kindergarten</span>
                      </Button>
                      <Button
                        className="btn-default btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="sm"
                      >
                        <span className="btn-inner--text">Primary</span>
                      </Button>
                      <Button
                        className="btn-default btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="sm"
                      >
                        <span className="btn-inner--text">Secondary</span>
                      </Button>
                      <Button
                        className="btn-default btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="sm"
                      >
                        <span className="btn-inner--text">University</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
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

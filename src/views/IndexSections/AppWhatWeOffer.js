import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const AppWhatWeOffer = () => {
  const offers = [
    {
      title: "Educational Search",
      description:
        "Leveraging our extensive database and educational insights, we provide personalised search assistance that aligns with your specific needs, helping you discover the ideal educational institution.",
      buttonText: "Get Started",
      buttonLink: "#",
    },
    {
      title: "Expert Support",
      description:
        "Our knowledgeable team offers expert support throughout your educational journey, from initial inquiries to final enrollment, ensuring a seamless experience for every student.",
      buttonText: "Contact",
      buttonLink: "#",
    },
    {
      title: "Institution Insights",
      description:
        "We provide valuable insights into various educational institutions across Rwanda, helping you navigate your options and find a school that meets your academic and personal aspirations.",
      buttonText: "Get Started",
      buttonLink: "#",
    },
  ];

  return (
    <section className="section section-what-we-offer bg-gradient-secondary">
      <Container>
        <h2 className="text-center font-weight-bold mb-5">What We Offer</h2>
        <Row>
          {offers.map((offer, index) => (
            <Col lg="4" md="6" className="mb-4" key={index}>
              <Card className="shadow border-0">
                <CardBody>
                  <h5 className="text-dark font-weight-bold">{offer.title}</h5>
                  <p className="text-muted mt-3">{offer.description}</p>
                  <Button
                    color="primary"
                    href={offer.buttonLink}
                    className="mt-3"
                  >
                    {offer.buttonText} &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AppWhatWeOffer;

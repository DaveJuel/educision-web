import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class AppNavbar extends React.Component {
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-light"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/app-logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/app-logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink className="text-primary" href="/advanced-search">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-primary" href="/advanced-search">
                      Solutions
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-primary" href="/schools">
                      Schools
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-primary" href="/schools">
                      How it works
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-primary" href="/schools">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Button className="btn btn-neutral" href="/register">
                      Login
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button className="btn btn-primary" href="/register">
                      Sign Up
                    </Button>
                  </NavItem>
                </Nav>

              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default AppNavbar;

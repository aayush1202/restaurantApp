import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <div className="d-flex flex-row">
              <NavbarToggler className="mr-auto" onClick={this.toggleNav} />
              <NavbarBrand className=" mr-auto" href="/">
                <img
                  src="assets/images/logo.png"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>

              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      <span className="fa fa-info fa-lg">About Us</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/menu">
                      <span className="fa fa-list fa-lg">Menu</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contact">
                      <span className="fa fa-address-card fa-lg">
                        Contact Us
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>

        <div id="jumbotron" className="container-fluid">
          <div className="container p-5">
            <div className="col-12 col-md-8 col-sm-8">
              <h1 className="display-5 fw-bold">Ristorante Con Fusion</h1>
              <p className="col-md-8 fs-4">
                We take inspiration form the world's best cuisines and create a
                unique fusion experience . Our lipsmakcing creations will tickle
                your culinary senses{" "}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

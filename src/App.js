import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Trade from "./components/Trade";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "balance": 0
    }
  }

  async componentDidMount() {
 
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar
            id="mainNav"
            className="fixed-top"
            expand="lg"
            style={{ backgroundColor: "#0a1647", padding: "20px" }}
          >
            <Navbar.Brand
              style={{
                color: "white",
                marginLeft: "50px",
                fontFamily: "Lato",
                fontSize: "34px",
                fontWeight: "bold",
              }}
              href="/"
            >
              Mercury
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{ color: "white", fontFamily: "Lato" }}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/trade"
                style={{ color: "white", fontFamily: "Lato" }}
              >
                Create Order
              </Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path="/trade">
              <Trade />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

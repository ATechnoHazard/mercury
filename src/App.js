import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Trade from "./components/Trade";
import MyOrders from "./components/MyOrders";
import web3 from "./web3";
import Web3 from "web3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
    };
  }

  async componentDidMount() {
    if (window.ethereum) {
      await window.ethereum.enable();
    }
    const account = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(account[0]);
    this.setState({ balance: Web3.utils.fromWei(balance, "ether") });
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
              <Nav.Link
                href="/myOrders"
                style={{ color: "white", fontFamily: "Lato" }}
              >
                My Orders
              </Nav.Link>
            </Nav>
            <Navbar.Text className="nav navbar-nav navbar-right">
              <span
                style={{
                  color: "yellow",
                  fontFamily: "Lato",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {this.state.balance.toString().slice(0, -12)} ETH
                <img></img>
              </span>
            </Navbar.Text>
          </Navbar>

          <Switch>
            <Route path="/trade">
              <Trade />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
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

import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import OrderCard from "./OrderCard";

class MyOrders extends Component {
  state = {
    orders: [],
  };

  render() {
    const items = this.state.orders.map((item) => {
      return <OrderCard title={item} />;
    });

    return (
      <div>
        <div
          style={{
            background:
              "url(" +
              "http://boxswap.io/static/media/leftBack.9b8a9502.svg" +
              ") left bottom no-repeat",
            paddingTop: "100px",
          }}
        >
          <Jumbotron
            style={{
              background:
                "url(" +
                "http://boxswap.io/static/media/rightBack.51f84d47.svg" +
                ") right bottom no-repeat",
            }}
          >
            <Container>
              <h4 style={{ color: "#343b5c", fontWeight: "bold" }}>
                My Orders
              </h4>
              <p style={{ color: "#606789" }}>
                List of all orders you've signed
              </p>
            </Container>
          </Jumbotron>
        </div>

        <Container>{items}</Container>
      </div>
    );
  }
}

export default MyOrders;

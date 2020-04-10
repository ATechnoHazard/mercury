import React, { Component } from "react";
import { Card } from "react-bootstrap";

class OrderCard extends Component {


  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default OrderCard;

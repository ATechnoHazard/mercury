import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";
import "../App.css";

class Trade extends Component {
  render() {
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
                Create a New Swap
              </h4>
              <p style={{ color: "#606789" }}>
                Create an atomic trade on your terms
              </p>

              <p></p>
            </Container>
          </Jumbotron>
        </div>

        <div
          style={{
            backgroundColor: "#f6f8ff",
            paddingTop: "40px",
            paddingBottom: "40px",
            marginTop: "-31px",
            flexGrow: 1,
          }}
        >
          <Container>
            <Form>
              <Row
                className="justify-content-between"
                style={{ textAlign: "center" }}
              >
                <Col lg={true}>
                  <img
                    style={{ maxWidth: "134px", height: "auto" }}
                    src="https://boxswap.io/static/media/purple_box_empty.d43bf52b.png"
                    alt=""
                  ></img>
                </Col>
                <Col lg={true}>
                  <img
                    src="https://boxswap.io/static/media/arrows_rev.5d85df36.svg"
                    alt=""
                  ></img>
                </Col>
                <Col lg={true}>
                  <img
                    style={{ maxWidth: "134px", height: "auto" }}
                    src="https://boxswap.io/static/media/pink_box_empty.1eafb6eb.png"
                    alt=""
                  ></img>
                </Col>
              </Row>
              <Row
                className="justify-content-between"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Col lg={true}>
                  <Card>
                    <Card.Body>
                      <Card.Title>SENDING</Card.Title>
                      <Form.Control
                        type="text"
                        placeholder="Token amount"
                      ></Form.Control>
                      <Form.Text className="text-muted">
                        Enter the amount of tokens you'd like to exchange
                      </Form.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={true}>
                  <Card>
                    <Card.Body>
                      <Card.Title>SENDING</Card.Title>
                      <Form.Control
                        type="text"
                        placeholder="NFT ID"
                      ></Form.Control>
                      <Form.Text className="text-muted">
                        Enter the ID of the token you'd like to trade
                      </Form.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default Trade;

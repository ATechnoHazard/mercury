import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col lg={true}>
                <h1>Welcome to the Mercury DEX!</h1>
                <p>
                  We allow trading of NFTs for TEST tokens using atomic
                  Plasma-backed swaps.
                </p>

                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Col>
              <Col lg={true}>
                <img src="" alt=""></img>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <br></br>

        <Container fluid style={{textAlign: "center"}}>
          <Row>
            <Col lg={true} className="my-auto">
              <Card className="border-0" style={{textAlign: "left"}}>
                <Card.Body>
                  <Card.Title>What are swaps?</Card.Title>
                  <Card.Text>
                    Swaps are a financial instrument, which in the context of a
                    decentralized exchange (DEX) mean a way to safely exchange
                    Non-Fungible Tokens (NFTs) for regular tokens.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={true}>
              <img
                src="https://boxswap.io/static/media/circle-animated.5926fac6.svg"
                alt=""
              ></img>
            </Col>
          </Row>

          <Row style={{ marginTop: "100px", backgroundColor: "#f1f3f6", padding: "40px" }}>
            <Col lg={true}>
              <img
                src="https://matic.network/_nuxt/c29fd82f84b3eb89fd5748d22eaa05cc.svg"
                alt=""
              ></img>
            </Col>

            <Col lg={true} className="my-auto">
              <Card className="border-0" style={{ backgroundColor: "#f1f3f6",textAlign: "left" }}>
                <Card.Body>
                  <Card.Title><h4 style={{fontWeight: "bold"}}>How swaps work</h4></Card.Title>
                  <Card.Text>
                    Swaps on our DEX take place through a Plasma smart contract,
                    deployed on the Matic Blockchain.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div>
          <Container>
            <Row style={{ marginTop: "100px" }}>
              <Col lg={true}>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title>How swaps work</Card.Title>
                    <Card.Text>
                      Swaps on our DEX take place through a Plasma smart
                      contract, deployed on the Matic Blockchain.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={true}></Col>
              <Col lg={true}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;

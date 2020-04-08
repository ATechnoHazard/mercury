import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";

class Home extends Component {
  scrollBtn = (event) => {
    event.preventDefault();
    window.scrollBy(0, window.screen.height);
  };

  render() {
    return (
      <div
        style={{ paddingTop: "100px" }}
      >
        <Jumbotron
          fluid
          style={{ backgroundColor: "#0a1647", height: window.screen.height }}
        >
          <Container>
            <Row>
              <Col lg={true}>
                <h1 style={{ color: "white", fontFamily: "Lato" }}>
                  Welcome to the Mercury DEX!
                </h1>
                <p style={{ color: "white", fontFamily: "Roboto" }}>
                  We allow trading of NFTs for TEST tokens using atomic
                  Plasma-backed swaps.
                </p>

                <p>
                  <Button onClick={this.scrollBtn} variant="primary">
                    Learn more
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <br></br>

        <Container fluid style={{ textAlign: "center" }}>
          <Row>
            <Col lg={true} className="my-auto">
              <Card
                className="border-0"
                style={{
                  textAlign: "left",
                  paddingLeft: "200px",
                  paddingRight: "50px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h2
                      style={{
                        fontWeight: "700",
                        fontSize: "34px",
                        fontFamily: "Lato, sans-serif",
                        color: "#0a1647",
                        lineHeight: "1.5",
                      }}
                    >
                      What are swaps?
                    </h2>
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Roboto, sans-serif" }}>
                    <p>
                      Swaps are a financial instrument, which in the context of
                      a decentralized exchange (DEX) mean a way to safely
                      exchange Non-Fungible Tokens (NFTs) for regular tokens.
                    </p>

                    <p>
                      This might be useful in a situation like say, a game in
                      which NFTs represent items in the game, which can be
                      purchased using the in-game currency, represented by
                      regular tokens.
                    </p>
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

          <Row
            style={{
              marginTop: "100px",
              backgroundColor: "#f1f3f6",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            <Col lg={true}>
              <img
                src="https://matic.network/_nuxt/c29fd82f84b3eb89fd5748d22eaa05cc.svg"
                alt=""
              ></img>
            </Col>

            <Col lg={true} className="my-auto">
              <Card
                className="border-0"
                style={{
                  backgroundColor: "#f1f3f6",
                  textAlign: "left",
                  paddingRight: "110px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h2
                      style={{
                        fontWeight: "700",
                        fontSize: "34px",
                        fontFamily: "Lato, sans-serif",
                        color: "#0a1647",
                        lineHeight: "1.5",
                      }}
                    >
                      How swaps work
                    </h2>
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Roboto, sans-serif" }}>
                    <p>
                      Swaps on our DEX take place through a Plasma smart
                      contract, deployed on the Matic Blockchain. The Plasma
                      smart contract takes a signed order from an account, and
                      upon matching of that order with the owner of the NFT, the
                      tokens are atomically swapped for each other.
                    </p>

                    <p>
                      Our swaps take place on the Matic network. This provides a
                      solution for faster and extremely low-cost transactions
                      with finality on the main chain. The system ensures
                      liveliness using PoS checkpoints which are pushed to the
                      Ethereum mainchain. This enables a single Matic sidechain
                      to theoretically achieve 2<sup>16</sup> transactions per
                      block, and possibly millions of transactions on multiple
                      chains in the future.
                    </p>
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

import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";
import web3 from "../web3";
import Web3 from "web3";

class Home extends Component {
  state = {
    balance: 0,
  };

  scrollBtn = (event) => {
    event.preventDefault();
    window.scrollBy(0, window.screen.height);
  };

  async componentDidMount() {
    // if (window.ethereum) {
    //   await window.ethereum.enable();
    // }
    // await window.ethereum.enable();
    const account = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(account[0]);
    this.setState({ balance: Web3.utils.fromWei(balance, "ether") });
  }

  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        <Jumbotron
          fluid
          style={{ backgroundColor: "#0a1647", height: window.screen.height }}
        >
          <Container>
            <Row className="my-auto" style={{ paddingTop: "100px" }}>
              <Col lg={true}>
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Lato",
                    fontSize: "54px",
                    fontWeight: "bold",
                  }}
                >
                  Welcome to the Mercury DEX!
                </h1>

                <br></br>

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
              <Col lg={true}>
                <img
                  style={{ maxHeight: "450px", width: "100%" }}
                  src="https://matic.network/_nuxt/bef152192b91389cba0a70f75cd1b71f.svg"
                  alt=""
                ></img>
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
                  <Card.Text className="text-paragraph">
                    Swaps are a financial instrument, which in the context of a
                    decentralized exchange (DEX) mean a way to safely exchange
                    Non-Fungible Tokens (NFTs) for regular tokens.
                  </Card.Text>
                  <Card.Text className="text-paragraph">
                    This might be useful in a situation like say, a game in
                    which NFTs represent items in the game, which can be
                    purchased using the in-game currency, represented by regular
                    tokens.
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
                  <Card.Text className="text-paragraph">
                    Swaps on our DEX take place through a Plasma smart contract,
                    deployed on the Matic Blockchain. The Plasma smart contract
                    takes a signed order from an account, and upon matching of
                    that order with the owner of the NFT, the tokens are
                    atomically swapped for each other.
                  </Card.Text>
                  <Card.Text className="text-paragraph">
                    Our swaps take place on the Matic network. This provides a
                    solution for faster and extremely low-cost transactions with
                    finality on the main chain. The system ensures liveliness
                    using PoS checkpoints which are pushed to the Ethereum
                    mainchain. This enables a single Matic sidechain to
                    theoretically achieve 2<sup>16</sup> transactions per block,
                    and possibly millions of transactions on multiple chains in
                    the future.
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

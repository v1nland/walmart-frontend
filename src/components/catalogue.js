import React, { Component } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

// api call
import { getProducto } from "../api/getProducto";
import { getProductos } from "../api/getProductos";

// helper
import { currencyFormat } from "../functions/helper"

class Catalogue extends Component {
  constructor(context) {
    super(context);

    this.searchById = this.searchById.bind(this);
    this.searchByQuery = this.searchByQuery.bind(this);

    this.state = {
      catalogue: [],
    };
  }

  searchById(e) {
    e.preventDefault();
    const et = e.target;

    getProducto(et.id.value)
      .then((res) => {
        this.setState({ catalogue: [res] });
      })
      .catch((e) => console.log(e));
  }

  searchByQuery(e) {
    e.preventDefault();
    const et = e.target;

    getProductos({ query: et.query.value })
      .then((res) => {
        this.setState({ catalogue: res });
      })
      .catch((e) => console.log(e));
  }

  RenderCatalogueElement = ({
    id,
    brand,
    description,
    image,
    price,
    discount_price,
  }) => (
    <Col key={id} md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={"https://" + image}
          width="286px"
          height="180px"
          alt={description}
        />
        <Card.Body>
          <Card.Title>{brand}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            Precio: {currencyFormat(discount_price)} <s>{(discount_price !== price) && currencyFormat(price)}</s>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  render() {
    const { catalogue } = this.state;

    return (
      <>
        <h1>Catalogo</h1>

        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.searchById}>
                <Form.Group>
                  <Form.Label>Buscar por ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    placeholder="Ingresa ID"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Buscar
                </Button>
              </Form>
            </Col>

            <Col>
              <Form onSubmit={this.searchByQuery}>
                <Form.Group>
                  <Form.Label>Buscar por marca/descripcion</Form.Label>
                  <Form.Control
                    type="text"
                    name="query"
                    placeholder="Ingresa marca o descripcion"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Buscar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <hr />

        <Container>
          <Row>{catalogue.map(this.RenderCatalogueElement)}</Row>
        </Container>
      </>
    );
  }
}
export default Catalogue;

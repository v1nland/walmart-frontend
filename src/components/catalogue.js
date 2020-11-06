import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// api call
import { getProducto } from "../api/getProducto";
import { getProductos } from "../api/getProductos";

class Catalogue extends Component {
  constructor(context) {
    super(context);

    this.searchById = this.searchById.bind(this)
    this.searchByQuery = this.searchByQuery.bind(this)

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
    <Col key={id}>
      <img
        src={"https://" + image}
        width="56px"
        height="56px"
        alt={description}
      />
      <p>{brand}</p> <p>{description}</p> <p>{price}</p> <p>{discount_price}</p>
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

        <Container>
          <Row>{catalogue.map(this.RenderCatalogueElement)}</Row>
        </Container>
      </>
    );
  }
}
export default Catalogue;

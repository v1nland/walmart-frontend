// react
import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// api call
import { getProducto } from "../api/getProducto";
import { getProductos } from "../api/getProductos";

// helper
import { isParseable } from "../functions/helper";
import { renderCatalogueElement } from "../functions/render";

class Catalogue extends Component {
	constructor(context) {
		super(context);

		// bind search query
		this.searchByQuery = this.searchByQuery.bind(this);

		// api response actions
		this.response_actions = {
			true: (res) => {
				res.json()
					.then((body) => {
						this.setState({ catalogue: body });

						if (body.length) {
							this.setOutput("", false);
						} else {
							this.setOutput("No hay resultados", true);
						}
					})
					.catch((e) => console.log(e));
			},
			false: (res) => {
				this.setOutput("Error en la comunicación", true);
			}
		};

		// current state
		this.state = {
			catalogue: [],
			output: {
				msg: "",
				shouldRender: false
			}
		};
	}

	// helper to set output message
	setOutput(msg, shouldRender) {
		this.setState({ output: { msg: msg, shouldRender: shouldRender } });
	}

	// get one product helper
	getProductoCatalogue(id) {
		getProducto(id)
			.then((res) => {
				this.response_actions[res.ok](res);
			})
			.catch((e) => console.log(e));
	}

	// get products helper
	getProductosCatalogue(params) {
		getProductos(params)
			.then((res) => {
				this.response_actions[res.ok](res);
			})
			.catch((e) => console.log(e));
	}

	// form handler
	searchByQuery(e) {
		e.preventDefault();
		const et = e.target;

		if (isParseable(et.query.value)) {
			this.getProductoCatalogue(parseInt(et.query.value));
			return;
		}

		if (et.query.value.length < 3) {
			this.setOutput("Debe ingresar al menos 3 caracteres", true);
		} else {
			this.getProductosCatalogue({ query: et.query.value });
		}
	}

	render() {
		const { catalogue } = this.state;
		const { output } = this.state;

		return (
			<>
				<h1>Catálogo</h1>

				<Container>
					<Row>
						<Col>
							<Form onSubmit={this.searchByQuery}>
								<Form.Group>
									<Form.Label>Buscador</Form.Label>
									<Form.Control type="text" name="query" placeholder="Ingresa ID, marca o descripción" />
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
					<h5>{output.shouldRender ? output.msg : ""}</h5>

					<Row>{output.shouldRender ? "" : catalogue.map(renderCatalogueElement)}</Row>
				</Container>
			</>
		);
	}
}
export default Catalogue;

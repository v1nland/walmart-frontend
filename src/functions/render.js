import { Card, Col } from "react-bootstrap";
import { currencyFormat } from "../functions/helper";

export const renderCatalogueElement = ({ id, brand, description, image, price, discount_price }) => (
	<Col key={id} md={4}>
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={"https://" + image} width="286px" height="180px" alt={description} />
			<Card.Body>
				<Card.Title>{brand}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>
					Precio: {currencyFormat(discount_price)} <s>{discount_price !== price && currencyFormat(price)}</s>
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
);

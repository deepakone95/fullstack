import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card>
      <Card.Img src={product.image}></Card.Img>
      <Card.Body>
        <a href={`product/${product._id}`}>
          <Card.Text>{product.name}</Card.Text>
        </a>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

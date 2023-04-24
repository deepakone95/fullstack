import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Card>
      <Card.Img src={product.image}></Card.Img>
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Text>{product.name}</Card.Text>
        </Link>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

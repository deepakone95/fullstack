import React, { useEffect, useState } from "react";
import products from "../products";

import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import axios from "axios";

function ProductScreen() {
  const [product, setProduct] = useState([]);

  let id = useParams();

  useEffect(() => {
    async function getProduct() {
      const data = await axios.get(`/api/product/${id.id}`);

      setProduct(data.data);
    }
    getProduct();
  }, []);
  return (
    <div>
      <Row>
        <Col md="6" variant="flush">
          <Image src={product.image} variant="flush" />
        </Col>
        <Col md="3" variant="flush">
          <ListGroup>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Price:-${product.price}</strong>
            </ListGroupItem>
            <ListGroupItem>description:{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md="3" variant="flush">
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>{product.price}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className="btn btn-block"
                disabled={product.countInStock === 0}
              >
                Add to cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Link to="/">Go Back...?</Link>
    </div>
  );
}

export default ProductScreen;

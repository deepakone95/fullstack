import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  console.log(products);
  return (
    <div>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default HomeScreen;

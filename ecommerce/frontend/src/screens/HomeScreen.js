import React from "react";
import { useEffect, useState } from "react";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await axios.get("/api/products");

      setProducts(data.data);
    }

    getProducts();
  }, []);
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

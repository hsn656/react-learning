import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return products?.length ? (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-4">
      {products.map((prd) => (
        <Col>
          <Card key={prd.id}>
            <Card.Img
              className="m-auto fixed-size mt-2"
              variant="top"
              src={prd.image}
            />
            <Card.Body>
              <Card.Title className="h6 text-center">
                {prd.title.slice(0, 10)}
              </Card.Title>
              <Card.Text
                title={prd.description}
                className="text-secondary text-center"
              >
                {prd.description.slice(0, 40) + "..."}
              </Card.Text>
              <div className="text-center">
                <Link to={`/products/${prd.id}`}>
                  <Button variant="primary">show details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <div className="text-center">
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
    </div>
  );
};

export default Products;

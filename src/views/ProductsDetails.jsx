import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);
  function fetchProduct() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return product ? (
    <Card className="w-50 m-auto mt-4">
      <Card.Img
        className="m-auto fixed-size mt-2"
        variant="top"
        src={product.image}
      />
      <Card.Body>
        <Card.Title className="h6 text-center">{product.title}</Card.Title>
        <ReactStars
          classNames="m-auto"
          size={30}
          value={product.rating.rate}
          edit={false}
        />
        <Card.Text
          title={product.description}
          className="text-secondary text-center"
        >
          {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroupItem variant="success">Price: {product.price}$</ListGroupItem>
        <ListGroupItem variant="primary">
          category: {product.category}{" "}
        </ListGroupItem>
      </ListGroup>
      <div className="text-center my-2">
        <Button variant="success">Buy now</Button>
      </div>
    </Card>
  ) : (
    <div className="text-center">
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
      <Spinner className="m-1" animation="grow" size="sm" />
    </div>
  );
};

export default ProductDetails;

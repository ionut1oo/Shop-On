import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/cartSlice";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface ProductListItemProps {
  product: Product;
}

const cardStyle = {
  background: '#fff',
  width: '15rem',
  borderRadius: '0.6em',
  margin: '1em',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: '0 13px 27px -5px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03)',
};

const linkStyle = {
  textDecoration: 'none', 
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const item = { ...product, quantity: 1 };
    dispatch(addToCart(item));
  };

  return (
    <Col className="md-4 mb-2">
      <Card style={cardStyle}>
        <Link to={`/products/${product.id}`} key={product.id} style={linkStyle}>
          <Card.Img src={product.imgUrl} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title className="text-center">{product.name}</Card.Title>
            <Card.Text className="text-center">
              Price: {formatCurrency(product.price)}
            </Card.Text>
          </Card.Body>
        </Link>
        <Button
          onClick={handleAddToCart}
          className="btn btn-primary w-100">
          + Add to Cart
        </Button>
      </Card>
    </Col>
  );
};

export default ProductListItem;

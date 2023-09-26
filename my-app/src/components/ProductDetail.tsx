import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

interface RouteParams {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.product);
  
  const params = useParams() as unknown as RouteParams;
  const { productId } = params;
  
  if (!productId) {
    return <div>Product ID is missing</div>;
  }

  const selectedProduct = products.find(product => product.id === parseInt(productId, 10));

  console.log("Selected Product: ", selectedProduct);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

   const cardStyle = {
     height:'150px',
     width:'200px',
     margin:'auto',
     marginTop:'50px',
    }

  return (
    <Card>
      <Card.Img style={cardStyle} alt={selectedProduct.name} src={selectedProduct.imgUrl} />
        <Card.Body>
        <Card.Title className="text-center">{selectedProduct.name}</Card.Title> 
        <Card.Text className="text-center" style={{fontStyle:'italic'}}>{selectedProduct.description}
        </Card.Text>
        <Card.Text className="text-center">
              Price: {formatCurrency(selectedProduct.price)}
        </Card.Text>
      </Card.Body>
      </Card>
  );
};

export default ProductDetail;

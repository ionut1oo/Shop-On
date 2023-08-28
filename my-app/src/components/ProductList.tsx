import React from 'react';
import { useSelector } from 'react-redux';
import ProductListItem from './ProductListItem';
import { Row } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface RootState {
  product: {
    products: Product[];
    inputText: string;
  };
}

const ProductList: React.FC = () => {

    const { products, inputText } = useSelector((state: RootState) => state.product);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(inputText.toLowerCase())
    );

    return (
        <Row className='my-5 mx-4'>
            {filteredProducts.map(product => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </Row>
    );
}

export default ProductList;

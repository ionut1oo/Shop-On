import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import { toggleBlink } from '../features/cartSlice';


interface RootState {
  cart: {
    isBlinking: boolean;
  };
}

const Home: React.FC = () => {
  // Type added for useSelector
  const isBlinking = useSelector((state: RootState) => state.cart.isBlinking);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(toggleBlink());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const headerStyle = {
    width: '100%',
    height: '50px',
    display: 'flex',
    textShadow: '1px 1px 2px red, 0 0 1em gray, 0 0 0.2em gray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isBlinking ? 'yellow' : 'azure',
    transition: 'background-color 0.5s ease',
  };

  return (
    <Container>
      <h1 className="text text-center text-primary mb-5 mt-3 shadow-lg" style={headerStyle}>
        Shop-On
      </h1>
      <ProductList />
    </Container>
  );
};

export default Home;

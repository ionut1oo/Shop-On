import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import ProductDetail from './ProductDetail';
import LoginForm from './LoginForm';

const App: React.FC = () => {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/auth' element={<LoginForm/>} /> 
      </Routes>
    </Container>
  );
}

export default App;

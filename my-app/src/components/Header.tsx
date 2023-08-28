import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { RootState } from '../app/store';
import { BsCart4 } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi'

export default function Header() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const cartItems = cart?.length || 0;  

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand to="/" className='text-info' as={NavLink} style={{ textShadow: "1px 1px 2px red, 0 0 1em darkBlue, 0 0 0.2em darkBlue" }}>
          Shop-On
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBar />
          <Nav className="ms-auto"> 
          <Nav.Link to="/auth" className='text-light' as={NavLink}>
            <BiUserCircle/>
          </Nav.Link>
            <Nav.Link to="/cart" className='text-light' as={NavLink}>
              <BsCart4 />
              { cartItems > 0 && (
                <span className="badge rounded-pill text-bg-danger" style={{position:'absolute', bottom:'30px'}}>
                  {cartItems}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

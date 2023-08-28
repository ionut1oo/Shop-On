import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQ, incrementQ, removeItem, CartItem } from '../features/cartSlice';
import { formatCurrency } from '../utilities/formatCurrency';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { RootState } from '../app/store';
import { BsTrash } from 'react-icons/bs';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Cart: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.cart) || [];
  const dispatch = useDispatch();

  const handleDecrement = (itemId: number, quantity: number) => {
    if (quantity <= 1) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(decrementQ(itemId));
    }
  };

  const getTotalPrice = () => {
    return formatCurrency(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  return (
    <Container fluid>
      <Row className='my-4'>
        <Col>
          <Card>
            <Card.Body>
              <div className='table-responsive'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                            <img src={item.imgUrl} className='rounded' width={60} height={60} alt={item.name} />
                          </td>
                          <td>{item.name}</td>
                          <td>
                            <AiFillCaretUp
                              onClick={() => dispatch(incrementQ(item.id))}
                              style={{ cursor: 'pointer', fontSize: '1.3rem' }}
                            />
                            <span className="mx-2">{item.quantity}</span>
                            <AiFillCaretDown
                              onClick={() => handleDecrement(item.id, item.quantity)}
                              style={{ cursor: 'pointer', fontSize: '1.3rem' }}
                            />
                          </td>
                          <td>{formatCurrency(item.price)}</td>
                          <td>{formatCurrency(item.price * item.quantity)}</td>
                          <td>
                            <BsTrash
                              onClick={() => dispatch(removeItem(item.id))}
                              style={{ cursor: 'pointer' }}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7}>No Items in Cart</td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={5}></td>
                      <td className='text-center'>
                        Total: <span className="badge bg-danger rounded-pill fs-6">
                          {getTotalPrice()}
                        </span>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

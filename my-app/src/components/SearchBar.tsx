import React, { ChangeEvent } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setInputText } from '../features/product';


const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputText(e.target.value)); 
  };

  return (
    <Container>
      <Row className='height d-flex justify-content-center align-items-center'>
        <Col md={8}>
          <div className='search'>
            <InputGroup>
              <FormControl type='text'  placeholder='Search' onChange={inputHandler} />
              <Button variant='primary'>Search</Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <div>

      </div>
    </Container>
  );
};

export default SearchBar;

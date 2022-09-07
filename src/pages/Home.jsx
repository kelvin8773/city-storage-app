import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrders } from '../features/orderTable/orderSlice';
import io from 'socket.io-client';

import SearchBar from '../features/search/input';
import OrderTable from '../features/orderTable';
import { AppContainer, Container } from '../styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const orders = useSelector((state) => {
    return state.orders.value;
  });

  useEffect(() => {
    const socket = io('ws://localhost:4000');
    socket.on('order_event', (data) => {
      dispatch(updateOrders(data));
    });
  }, []);

  return (
    <AppContainer>
      <h1>City Storage Order Tracking System</h1>
      <Container>
        <SearchBar value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </Container>

      <OrderTable orders={orders} filter={inputValue} />
    </AppContainer>
  );
};

export default Home;

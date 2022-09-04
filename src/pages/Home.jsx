import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrders } from '../features/orderTable/orderSlice';
import io from 'socket.io-client';

import SearchBar from '../features/search/input';
import OrderTable from '../features/orderTable';
import { AppContainer, Container } from '../styles';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [inputValue, setInputValue] = useState();
  // const dispatch = useDispatch();
  // const orders = useSelector((state) => {
  //   return state.orders.value;
  // });

  useEffect(() => {
    const socket = io('ws://localhost:4000');
    socket.on('order_event', (data) => {
      // console.log(data);
      // dispatch(updateOrders(data));

      setOrders((preOrders) => {
        const toRemoveIndexes = [];
        if (preOrders.length === 0) return data;

        const updateOrders = preOrders.sort().map((preOrder) => {
          let nextOrder = { ...preOrder };
          data.map((newOrder, newOrderIndex) => {
            if (preOrder.id === newOrder.id) {
              nextOrder = { ...newOrder };
              toRemoveIndexes.push(newOrderIndex);
            }
          });

          return nextOrder;
        });

        toRemoveIndexes.map((idx) => (data[idx] = 'removed'));
        const newOrders = data.filter((order) => order !== 'removed');
        const allOrders = [...updateOrders, ...newOrders];

        return allOrders;
      });
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

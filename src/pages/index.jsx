import React, { useEffect, useState } from 'react';
import { AppContainer, Container, TableWrapper, TableHeader } from '../styles';
import io from 'socket.io-client';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [summary, setSummary] = useState({
    created: 0,
    cooked: 0,
    driveReceived: 0,
    delivered: 0,
    cancelled: 0
  });

  const countStatus = (array, status) => {
    return array.filter((o) => o.event_name === status)?.length || 0;
  };

  useEffect(() => {
    const socket = io('ws://localhost:4000');
    socket.on('order_event', (data) => {
      setOrders((preOrders) => {
        const toRemoveIndexes = [];
        if (preOrders.length === 0) return data;

        const updateOrders = preOrders.sort().map((preOrder, preOrderIndex) => {
          let nextOrder = { ...preOrder };
          data.map((newOrder, newOrderIndex) => {
            if (preOrder.id === newOrder.id) {
              nextOrder = { ...newOrder };
              toRemoveIndexes.push(newOrderIndex);
            }
          });

          return nextOrder;
        });

        console.log('updated Order', toRemoveIndexes);
        toRemoveIndexes.map((idx) => (data[idx] = 'removed'));
        const newOrders = data.filter((order) => order !== 'removed');
        const allOrders = [...updateOrders, ...newOrders];

        return allOrders;
      });
    });
  }, []);

  useEffect(() => {
    const newSummary = {
      created: countStatus(orders, 'CREATED'),
      cooked: countStatus(orders, 'COOKED'),
      driveReceived: countStatus(orders, 'DRIVER_RECEIVED'),
      cancelled: countStatus(orders, 'CANCELLED'),
      delivered: countStatus(orders, 'DELIVERED')
    };

    setSummary(newSummary);
  }, [orders]);

  return (
    <AppContainer>
      <h1>City Storage Order Tracking System</h1>
      <Container>
        <div>
          <input type="text" />
        </div>
      </Container>

      <Container>
        <TableWrapper data-testid="summaryTable">
          <thead>
            <tr>
              <TableHeader>
                <h3>Orders Created</h3>
              </TableHeader>
              <TableHeader>
                <h3>Orders Cooked</h3>
              </TableHeader>
              <TableHeader>
                <h3>Drivers Received</h3>
              </TableHeader>
              <TableHeader>
                <h3>Orders Cancelled</h3>
              </TableHeader>
              <TableHeader>
                <h3>Orders Delivered </h3>
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <h3>{summary.created}</h3>
              </th>
              <th>
                <h3>{summary.cooked}</h3>
              </th>
              <th>
                <h3>{summary.driveReceived}</h3>
              </th>
              <th>
                <h3>{summary.cancelled}</h3>
              </th>
              <th>
                <h3>{summary.delivered}</h3>
              </th>
            </tr>
          </tbody>
        </TableWrapper>

        <TableWrapper data-testid="orderTable">
          <thead>
            <tr>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Item</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Destination</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.item}</td>
                  <td>{order.customer}</td>
                  <td>{order.destination}</td>
                  <td>{order.price}</td>
                  <td>{order.event_name}</td>
                </tr>
              );
            })}
          </tbody>
        </TableWrapper>
      </Container>
    </AppContainer>
  );
};

export default Home;

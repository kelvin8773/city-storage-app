import React from 'react';
import PropTypes from 'prop-types';

import Summary from './summary';
import { TableWrapper, TableHeader, TableRow, TableCell, Container } from '../../styles';

const OrderTable = (props) => {
  const { orders } = props;
  return (
    <Container>
      <Summary orders={orders} />

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
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.item}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.destination}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.event_name}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </TableWrapper>
    </Container>
  );
};

OrderTable.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderTable;

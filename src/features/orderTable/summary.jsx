import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper, TableHeader, TableCell } from '../../styles';

const Summary = ({ orders }) => {
  const countStatus = (array, status) => {
    return array.filter((o) => o.event_name === status).length || 0;
  };

  const summary = {
    created: countStatus(orders, 'CREATED'),
    cooked: countStatus(orders, 'COOKED'),
    driveReceived: countStatus(orders, 'DRIVER_RECEIVED'),
    cancelled: countStatus(orders, 'CANCELLED'),
    delivered: countStatus(orders, 'DELIVERED')
  };

  return (
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
          <TableCell>
            <h3>{summary.created}</h3>
          </TableCell>
          <TableCell>
            <h3>{summary.cooked}</h3>
          </TableCell>
          <TableCell>
            <h3>{summary.driveReceived}</h3>
          </TableCell>
          <TableCell>
            <h3>{summary.cancelled}</h3>
          </TableCell>
          <TableCell>
            <h3>{summary.delivered}</h3>
          </TableCell>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

Summary.propTypes = {
  orders: PropTypes.array.isRequired
};

export default Summary;

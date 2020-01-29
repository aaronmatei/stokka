import React from 'react';
import clsx from 'clsx';
import _ from 'lodash';

export const orderStatuses = [
  {
    id: 1,
    name: 'Awaiting check payment',
    color: 'bg-blue-600 text-white'
  },
  {
    id: 2,
    name: 'Payment accepted',
    color: 'bg-green-600 text-white'
  },
  {
    id: 3,
    name: 'Preparing the order',
    color: 'bg-orange-600 text-black'
  },
  {
    id: 4,
    name: 'Shipped',
    color: 'bg-purple-600 text-white'
  },
  {
    id: 5,
    name: 'Delivered',
    color: 'bg-green-500 text-white'
  },
  {
    id: 6,
    name: 'Canceled',
    color: 'bg-pink-600 text-white'
  },
  {
    id: 7,
    name: 'Refunded',
    color: 'bg-red-600 text-white'
  },
  {
    id: 8,
    name: 'Payment error',
    color: 'bg-red-500 text-white'
  },
  {
    id: 9,
    name: 'On pre-order (paid)',
    color: 'bg-purple-600 text-white'
  },
  {
    id: 10,
    name: 'Awaiting bank wire payment',
    color: 'bg-blue-600 text-white'
  },
  {
    id: 11,
    name: 'Awaiting PayPal payment',
    color: 'bg-blue-500 text-white'
  },
  {
    id: 12,
    name: 'Remote payment accepted',
    color: 'bg-green-400 text-white'
  },
  {
    id: 13,
    name: 'On pre-order (not paid)',
    color: 'bg-purple-500 text-white'
  },
  {
    id: 14,
    name: 'Awaiting Cash-on-delivery payment',
    color: 'bg-blue-400 text-white'
  }
];

function OrdersStatus(props) {
  return (
    <div
      className={clsx(
        'inline text-8 p-1 rounded truncate',
        _.find(orderStatuses, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  );
}

export default OrdersStatus;

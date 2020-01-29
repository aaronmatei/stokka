import React, { useEffect, useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Icon,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import FuseAnimate from '../../../ThemeComponents/Animate';
import { Link } from 'react-router-dom';

import OrderContext from '../../../context/orders/orderContext';
import OrdersStatus from './OrdersStatus';
import OrderInvoice from './OrderInvoice';

function Order(props) {
  const [data, setData] = useState();
  const orderContext = useContext(OrderContext);
  const { orders } = orderContext;
  const order = [orders[0]];

  useEffect(() => {
    setData(order);
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   Tabpanel starts here
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component='div'
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  return (
    <Fragment>
      {data &&
        data.map(order => (
          <div className='flex flex-1 w-full items-center justify-between'>
            <div className='flex flex-1 flex-col items-center sm:items-start'>
              <FuseAnimate animation='transition.slideRightIn' delay={300}>
                <Typography
                  className='normal-case flex items-center sm:mb-12'
                  component={Link}
                  role='button'
                  to='/apps/e-commerce/orders'
                  color='inherit'
                >
                  <Icon className='mr-4 text-20'>arrow_back</Icon>
                  Orders
                </Typography>
              </FuseAnimate>

              <div className='flex flex-col min-w-0 items-center sm:items-start'>
                <FuseAnimate animation='transition.slideLeftIn' delay={300}>
                  <Typography className='text-16 sm:text-20 truncate'>
                    {'Order ' + order.reference}
                  </Typography>
                </FuseAnimate>

                <FuseAnimate animation='transition.slideLeftIn' delay={300}>
                  <Typography variant='caption'>
                    {'From ' +
                      order.customer.firstName +
                      ' ' +
                      order.customer.lastName}
                  </Typography>
                </FuseAnimate>
              </div>

              <AppBar position='static'>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='simple tabs example'
                  centered
                >
                  <Tab label='Order Details' {...a11yProps(0)} />
                  <Tab label='Products' {...a11yProps(1)} />
                  <Tab label='Invoice' {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <div className='p-16 sm:p-24 max-w-2xl w-full'>
                  <div className='pb-10'>
                    <div className='pb-10 flex items-center'>
                      <Icon className='mr-16' color='action'>
                        account_circle
                      </Icon>
                      <Typography className='h2' color='textSecondary'>
                        Customer
                      </Typography>
                    </div>

                    <div className='mb-24'>
                      <div className='table-responsive mb-16'>
                        <table className='table-auto'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Company</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='border px-4 py-2'>
                                <div className='flex items-center'>
                                  <Avatar
                                    className='mr-8'
                                    src={order.customer.avatar}
                                  />
                                  <Typography className='truncate'>
                                    {order.customer.firstName +
                                      ' ' +
                                      order.customer.lastName}
                                  </Typography>
                                </div>
                              </td>
                              <td className='border px-4 py-2'>
                                <Typography className='truncate'>
                                  {order.customer.email}
                                </Typography>
                              </td>
                              <td className='border px-4 py-2'>
                                <Typography className='truncate'>
                                  {order.customer.phone}
                                </Typography>
                              </td>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>
                                  {order.customer.company}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='pb-20'>
                    <div className='pb-16 flex items-center'>
                      <Icon className='mr-16' color='action'>
                        access_time
                      </Icon>
                      <Typography className='h2' color='textSecondary'>
                        Order Status
                      </Typography>
                    </div>

                    <div className='table-responsive mb-10'>
                      <table className='table-auto'>
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Updated On</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.status.map(status => (
                            <tr key={status.id}>
                              <td className='border px-4 py-2'>
                                <OrdersStatus name={status.name} />
                              </td>
                              <td className='border px-4 py-2'>
                                {status.date}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className='pb-20'>
                    <div className='pb-16 flex items-center'>
                      <Icon className='mr-16' color='action'>
                        attach_money
                      </Icon>
                      <Typography className='h2' color='textSecondary'>
                        Payment
                      </Typography>
                    </div>
                    <div className='table-responsive mb-16'>
                      <table className='table-auto'>
                        <thead>
                          <tr>
                            <th>TransactionID</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border px-4 py-2'>
                              <span className='truncate'>
                                {order.payment.transactionId}
                              </span>
                            </td>
                            <td className='border px-4 py-2'>
                              <span className='truncate'>
                                {order.payment.method}
                              </span>
                            </td>
                            <td className='border px-4 py-2'>
                              <span className='truncate'>
                                {order.payment.amount}
                              </span>
                            </td>
                            <td className='border px-4 py-2'>
                              <span className='truncate'>
                                {order.payment.date}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='pb-20'>
                    <div className='pb-16 flex items-center'>
                      <Icon className='mr-16' color='action'>
                        local_shipping
                      </Icon>
                      <Typography className='h2' color='textSecondary'>
                        Shipping
                      </Typography>
                    </div>

                    <div className='table-responsive mb-10'>
                      <table className='table-auto'>
                        <thead>
                          <tr>
                            <th>Tracking Code</th>
                            <th>Carrier</th>
                            <th>Weight</th>
                            <th>Fee</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.shippingDetails.map(shipping => (
                            <tr key={shipping.date}>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>
                                  {shipping.tracking}
                                </span>
                              </td>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>
                                  {shipping.carrier}
                                </span>
                              </td>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>
                                  {shipping.weight}
                                </span>
                              </td>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>{shipping.fee}</span>
                              </td>
                              <td className='border px-4 py-2'>
                                <span className='truncate'>
                                  {shipping.date}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className='table-responsive mb-10'>
                  <table className='table-auto'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map(product => (
                        <tr key={product.id}>
                          <td className='border w-20'>{product.id}</td>
                          <td className='w-30 h-30'>
                            <img
                              className='w-30 h-20'
                              src={product.image}
                              alt='product'
                            />
                          </td>
                          <td className='border px-4 py-2'>
                            <Typography
                              component={Link}
                              to={'/apps/e-commerce/products/' + product.id}
                              className='truncate'
                              style={{
                                color: 'inherit',
                                textDecoration: 'underline'
                              }}
                            >
                              {product.name}
                            </Typography>
                          </td>
                          <td className='border w-64 text-right'>
                            <span className='truncate'>${product.price}</span>
                          </td>
                          <td className='border w-64 text-right'>
                            <span className='truncate'>{product.quantity}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                {<OrderInvoice order={order} />}
              </TabPanel>
            </div>
          </div>
        ))}
    </Fragment>
  );
}

export default Order;

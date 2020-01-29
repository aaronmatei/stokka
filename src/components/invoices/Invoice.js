import React, { useEffect, useState, useContext } from 'react';

import {
  Card,
  CardContent,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Divider
} from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import Animate from '../../ThemeComponents/Animate';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';

import InvoiceContext from '../../context/invoices/invoiceContext';

const useStyles = makeStyles(theme => ({
  root: {
    background: `${drawerbg}`
  },
  card: {
    maxWidth: 1100
  }
}));

const drawerbg = blueGrey[900];

function ModernInvoicePage() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  const invoiceContext = useContext(InvoiceContext);
  const { invoices } = invoiceContext;

  useEffect(() => {
    setData(invoices);
  }, []);

  return (
    <div
      className={clsx(
        classes.root,
        'flex-grow flex-shrink-0 p-0 sm:p-5 print:p-0'
      )}
    >
      {data &&
        data.map(invoice => (
          <Animate animation={{ translateY: [0, '100%'] }} duration={600}>
            <Card
              className={clsx(
                classes.card,
                'mx-auto w-xl p-50 print:w-full print:shadow-none'
              )}
            >
              <CardContent className='bg-green-100 print:p-0'>
                <div className='m-1 flex flex-row justify-between items-start'>
                  <div className='flex flex-col'>
                    <div className='flex items-center mb-30 print:mb-0 border-blue-200'>
                      <img
                        className='w-50 h-50 print:w-60'
                        src='assets/images/logos/fuse.svg'
                        alt='logo'
                      />

                      <div className='max-w-160 border-blue-200'>
                        <Typography color='textSecondary'>
                          {invoice.from.title}
                        </Typography>

                        {invoice.from.address && (
                          <Typography color='textSecondary'>
                            {invoice.from.address}
                          </Typography>
                        )}
                        {invoice.from.phone && (
                          <Typography color='textSecondary'>
                            <span>Phone:</span>
                            {invoice.from.phone}
                          </Typography>
                        )}
                        {invoice.from.email && (
                          <Typography color='textSecondary'>
                            <span>Email:</span>
                            {invoice.from.email}
                          </Typography>
                        )}
                        {invoice.from.website && (
                          <Typography color='textSecondary'>
                            <span>Web:</span>
                            {invoice.from.website}
                          </Typography>
                        )}
                      </div>
                    </div>

                    <div className='flex items-center mb-30 print:mb-0'>
                      <div className='mr-5 flex justify-end items-center w-200 print:w-60'>
                        <img
                          className='ml-10 pr-5 w-150 h-50 print:w-60'
                          src='assets/images/logos/firebase.svg'
                          alt='logo'
                        />
                      </div>

                      <div className='max-w-160 border-blue-200'>
                        <Typography color='textSecondary'>
                          {invoice.client.title}
                        </Typography>

                        {invoice.client.address && (
                          <Typography color='textSecondary'>
                            {invoice.client.address}
                          </Typography>
                        )}
                        {invoice.client.phone && (
                          <Typography color='textSecondary'>
                            <span>Phone:</span>
                            {invoice.client.phone}
                          </Typography>
                        )}
                        {invoice.client.email && (
                          <Typography color='textSecondary'>
                            <span>Email:</span>
                            {invoice.client.email}
                          </Typography>
                        )}
                        {invoice.client.website && (
                          <Typography color='textSecondary'>
                            <span>Web:</span>
                            {invoice.client.website}
                          </Typography>
                        )}
                      </div>
                    </div>
                  </div>

                  <table>
                    <tbody>
                      <tr>
                        <td className='pr-16 pb-32'>
                          <Typography
                            className='font-light'
                            variant='h4'
                            color='textSecondary'
                          >
                            INVOICE
                          </Typography>
                        </td>
                        <td className='pb-32'>
                          <Typography className='font-light' variant='h4'>
                            {invoice.number}
                          </Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className='text-right pr-16'>
                          <Typography color='textSecondary'>
                            INVOICE DATE
                          </Typography>
                        </td>
                        <td>
                          <Typography>{invoice.date}</Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className='text-right pr-16'>
                          <Typography color='textSecondary'>
                            DUE DATE
                          </Typography>
                        </td>
                        <td>
                          <Typography>{invoice.dueDate}</Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className='text-right pr-16'>
                          <Typography color='textSecondary'>
                            TOTAL DUE
                          </Typography>
                        </td>
                        <td>
                          <Typography>
                            {formatter.format(invoice.total)}
                          </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='m-20 mt-50 print:mt-0'>
                  <Table className='simple'>
                    <TableHead>
                      <TableRow>
                        <TableCell>SERVICE</TableCell>
                        <TableCell>UNIT</TableCell>
                        <TableCell align='right'>UNIT PRICE</TableCell>
                        <TableCell align='right'>QUANTITY</TableCell>
                        <TableCell align='right'>TOTAL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {invoice.services.map(service => (
                        <TableRow key={service.id}>
                          <TableCell>
                            <Typography className='mb-8' variant='subtitle1'>
                              {service.title}
                            </Typography>
                            <Typography variant='caption' color='textSecondary'>
                              {service.detail}
                            </Typography>
                          </TableCell>
                          <TableCell>{service.unit}</TableCell>
                          <TableCell align='right'>
                            {formatter.format(service.unitPrice)}
                          </TableCell>
                          <TableCell align='right'>
                            {service.quantity}
                          </TableCell>
                          <TableCell align='right'>
                            {formatter.format(service.total)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Table className='simple'>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            SUBTOTAL
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            {formatter.format(invoice.subtotal)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            TAX
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            {formatter.format(invoice.tax)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            DISCOUNT
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            className='font-medium'
                            variant='subtitle1'
                            color='textSecondary'
                          >
                            {formatter.format(invoice.discount)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            className='font-light'
                            variant='h4'
                            color='textSecondary'
                          >
                            TOTAL
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            className='font-light'
                            variant='h4'
                            color='textSecondary'
                          >
                            {formatter.format(invoice.total)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className='ml-20 mr-20 mt-50 mb-30 print:mt-0 print:px-16'>
                  <Typography className='mb-24 print:mb-12' variant='body1'>
                    Please pay within 15 days. Thank you for your business.
                  </Typography>

                  <div className='flex'>
                    <div className='flex-shrink-0 mr-24'>
                      <img
                        className='w-32'
                        src='assets/images/logos/fuse.svg'
                        alt='logo'
                      />
                    </div>

                    <Typography
                      className='font-medium mb-64'
                      variant='caption'
                      color='textSecondary'
                    >
                      In condimentum malesuada efficitur. Mauris volutpat
                      placerat auctor. Ut ac congue dolor. Quisque scelerisque
                      lacus sed feugiat fermentum. Cras aliquet facilisis
                      pellentesque. Nunc hendrerit quam at leo commodo, a
                      suscipit tellus dapibus. Etiam at felis volutpat est
                      mollis lacinia. Mauris placerat sem sit amet velit mollis,
                      in porttitor ex finibus. Proin eu nibh id libero tincidunt
                      lacinia et eget eros.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Animate>
        ))}
    </div>
  );
}

export default ModernInvoicePage;

/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 **/

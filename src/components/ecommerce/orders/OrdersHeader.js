import React, { Fragment } from 'react';
import { Paper, Input, Icon, Typography } from '@material-ui/core';
import FuseAnimate from '../../../ThemeComponents/Animate';

function OrdersHeader(props) {
  return (
    <Fragment>
      <div className='flex flex-1 w-full items-center justify-between'>
        <div className='flex items-center'>
          <FuseAnimate animation='transition.expandIn' delay={300}>
            <Icon className='text-32 mr-0 sm:mr-12'>shopping_basket</Icon>
          </FuseAnimate>

          <FuseAnimate animation='transition.slideLeftIn' delay={300}>
            <Typography className='hidden sm:flex' variant='h6'>
              Orders
            </Typography>
          </FuseAnimate>
        </div>

        <div className='flex flex-1 items-center justify-center pr-0 pl-12 sm:px-12'>
          <FuseAnimate animation='transition.slideDownIn' delay={300}>
            <Paper
              className='flex items-center w-full max-w-512 px-8 py-4 rounded-8'
              elevation={1}
            >
              <Icon className='mr-8' color='action'>
                search
              </Icon>

              <Input
                placeholder='Search'
                className='flex flex-1'
                disableUnderline
                fullWidth
              />
            </Paper>
          </FuseAnimate>
        </div>
      </div>
    </Fragment>
  );
}

export default OrdersHeader;

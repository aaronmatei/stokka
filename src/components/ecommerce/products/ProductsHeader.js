import React from 'react';
import { Paper, Button, Input, Icon, Typography } from '@material-ui/core';
import FuseAnimate from '../../../ThemeComponents/Animate';
import { Link } from 'react-router-dom';

function ProductsHeader(props) {
  return (
    <div className='h-32 bg-gray-900 text-white flex flex-1 w-full items-center justify-between'>
      <div className='flex items-center'>
        <FuseAnimate animation='transition.expandIn' delay={300}>
          <Icon className='text-32 mr-0 sm:mr-12'>shopping_basket</Icon>
        </FuseAnimate>
        <FuseAnimate animation='transition.slideLeftIn' delay={300}>
          <Typography className='hidden sm:flex' variant='h6'>
            Products
          </Typography>
        </FuseAnimate>
      </div>

      <div className='flex flex-1 items-center justify-center'>
        <FuseAnimate animation='transition.slideDownIn' delay={300}>
          <Paper
            className='flex items-center w-3/12 max-w-512 rounded-8'
            elevation={1}
          >
            <Icon className='mr-8' color='action'>
              search
            </Icon>

            <Input
              placeholder='Search'
              className='flex flex-1 w-3/12'
              disableUnderline
              inputProps={{
                'aria-label': 'Search'
              }}
            />
          </Paper>
        </FuseAnimate>
      </div>
      <FuseAnimate animation='transition.slideRightIn' delay={300}>
        <Button
          component={Link}
          to='/apps/ecommerce/products/new'
          className='whitespace-no-wrap'
          variant='contained'
          color='primary'
        >
          <span className='hidden sm:flex'>Add New Product</span>
          <span className='flex sm:hidden'>New</span>
        </Button>
      </FuseAnimate>
    </div>
  );
}

export default ProductsHeader;

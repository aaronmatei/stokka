import React, { Fragment, useEffect, useState, useContext } from 'react';
import {
  Button,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Icon,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import FuseAnimate from '../../../ThemeComponents/Animate';
import FuseUtils from '../../../ThemeComponents/themeUtils';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import _ from 'lodash';
import ProductContext from '../../../context/products/productContext';

const useStyles = makeStyles(theme => ({
  productImageFeaturedStar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0
  }
}));

function Product(props) {
  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);
  const productsContext = useContext(ProductContext);
  const { products } = productsContext;

  useEffect(() => {
    function updateProductState() {}

    updateProductState();
  }, []);

  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {};

    reader.onerror = function() {
      console.log('error on load image');
    };
  }

  return (
    <Fragment>
      <div className='flex flex-1 w-full items-center justify-between'>
        <div className='flex flex-col items-start max-w-full'>
          <FuseAnimate animation='transition.slideRightIn' delay={300}>
            <Typography
              className='normal-case flex items-center sm:mb-12'
              component={Link}
              role='button'
              to='/apps/e-commerce/products'
              color='inherit'
            >
              <Icon className='mr-4 text-20'>arrow_back</Icon>
              Products
            </Typography>
          </FuseAnimate>

          <div className='flex items-center max-w-full'>
            <FuseAnimate animation='transition.expandIn' delay={300}>
              <img
                className='w-32 sm:w-48 mr-8 sm:mr-16 rounded'
                src='assets/images/ecommerce/product-image-placeholder.png'
                alt='imagye'
              />
            </FuseAnimate>
            <div className='flex flex-col min-w-0'>
              <FuseAnimate animation='transition.slideLeftIn' delay={300}>
                <Typography className='text-16 sm:text-20 truncate'>
                  Here here
                </Typography>
              </FuseAnimate>
              <FuseAnimate animation='transition.slideLeftIn' delay={300}>
                <Typography variant='caption'>Product Detail</Typography>
              </FuseAnimate>
            </div>
          </div>
        </div>
        <FuseAnimate animation='transition.slideRightIn' delay={300}>
          <Button className='whitespace-no-wrap' variant='contained'>
            Save
          </Button>
        </FuseAnimate>
      </div>

      <div className='p-16 sm:p-24 max-w-2xl'>
        <div>
          <TextField
            className='mt-8 mb-16'
            required
            label='Name'
            autoFocus
            id='name'
            name='name'
            variant='outlined'
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            id='description'
            name='description'
            label='Description'
            type='text'
            multiline
            rows={5}
            variant='outlined'
            fullWidth
          />
        </div>

        <div>
          <input
            accept='image/*'
            className='hidden'
            id='button-file'
            type='file'
            onChange={handleUploadChange}
          />
          <div className='flex justify-center sm:justify-start flex-wrap'>
            <label
              htmlFor='button-file'
              className='flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
            >
              <Icon fontSize='large' color='action'>
                cloud_upload
              </Icon>
            </label>

            <div className='flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'>
              <Icon>star</Icon>
              <img
                className='max-w-none w-auto h-full'
                src='tobegiven'
                alt='product'
              />
            </div>
          </div>
        </div>

        <div>
          <TextField
            className='mt-8 mb-16'
            label='Tax Excluded Price'
            id='priceTaxExcl'
            name='priceTaxExcl'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
            type='number'
            variant='outlined'
            autoFocus
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            label='Tax Included Price'
            id='priceTaxIncl'
            name='priceTaxIncl'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
            type='number'
            variant='outlined'
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            label='Tax Rate'
            id='taxRate'
            name='taxRate'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
            type='number'
            variant='outlined'
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            label='Compared Price'
            id='comparedPrice'
            name='comparedPrice'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
            type='number'
            variant='outlined'
            fullWidth
            helperText='Add a compare price to show next to the real price'
          />
        </div>

        <div>
          <TextField
            className='mt-8 mb-16'
            required
            label='SKU'
            autoFocus
            id='sku'
            name='sku'
            variant='outlined'
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            label='Quantity'
            id='quantity'
            name='quantity'
            variant='outlined'
            type='number'
            fullWidth
          />
        </div>

        <div>
          <div className='flex'>
            <TextField
              className='mt-8 mb-16 mr-8'
              label='Width'
              autoFocus
              id='width'
              name='width'
              variant='outlined'
              fullWidth
            />

            <TextField
              className='mt-8 mb-16 mr-8'
              label='Height'
              id='height'
              name='height'
              variant='outlined'
              fullWidth
            />

            <TextField
              className='mt-8 mb-16 mr-8'
              label='Depth'
              id='depth'
              name='depth'
              variant='outlined'
              fullWidth
            />
          </div>

          <TextField
            className='mt-8 mb-16'
            label='Weight'
            id='weight'
            name='weight'
            variant='outlined'
            fullWidth
          />

          <TextField
            className='mt-8 mb-16'
            label='Extra Shipping Fee'
            id='extraShippingFee'
            name='extraShippingFee'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
            fullWidth
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Product;

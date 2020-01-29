import React, { Fragment } from 'react';
import ProductsTable from './ProductsTable';
import ProductsHeader from './ProductsHeader';

function Products() {
  return (
    <Fragment>
      <div className='min-h-72 h-72 sm:h-136 sm:min-h-136'>
        <ProductsHeader />
      </div>
      <div className='flex'>
        <ProductsTable />
      </div>
    </Fragment>
  );
}

export default Products;

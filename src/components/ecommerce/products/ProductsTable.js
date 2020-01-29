import React, { useEffect, useState, useContext } from 'react';

import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Checkbox
} from '@material-ui/core';

import clsx from 'clsx';
import _ from 'lodash';
import ProductsTableHead from './ProductsTableHead';
import ProductContext from '../../../context/products/productContext';

function ProductsTable(props) {
  const productsContext = useContext(ProductContext);
  const { products } = productsContext;

  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(products);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null
  });

  useEffect(() => {
    setData(products);
  }, []);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id
    });
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map(n => n.id));
      return;
    }
    setSelected([]);
  }

  function handleClick(item) {}

  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  return (
    <div className='w-full flex flex-col'>
      <Table className='table-auto' aria-labelledby='tableTitle'>
        <ProductsTableHead
          numSelected={selected.length}
          order={order}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={data.length}
        />

        <TableBody>
          {_.orderBy(
            data,
            [
              o => {
                switch (order.id) {
                  case 'categories': {
                    return o.categories[0];
                  }
                  default: {
                    return o[order.id];
                  }
                }
              }
            ],
            [order.direction]
          )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(n => {
              const isSelected = selected.indexOf(n.id) !== -1;
              return (
                <TableRow
                  className='h-10 cursor-pointer'
                  hover
                  role='checkbox'
                  aria-checked={isSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={isSelected}
                  onClick={event => handleClick(n)}
                >
                  <TableCell className='w-10 px-4 sm:px-12' padding='checkbox'>
                    <Checkbox
                      checked={isSelected}
                      onClick={event => event.stopPropagation()}
                      onChange={event => handleCheck(event, n.id)}
                    />
                  </TableCell>

                  <TableCell
                    className='w-30'
                    component='th'
                    scope='row'
                    padding='none'
                  >
                    {n.images.length > 0 && n.featuredImageId ? (
                      <img
                        className='h-16 w-20 block rounded'
                        src={_.find(n.images, { id: n.featuredImageId }).url}
                        alt={n.name}
                      />
                    ) : (
                      <img
                        className='h-16 w-20 block rounded'
                        src='assets/images/ecommerce/product-image-placeholder.png'
                        alt={n.name}
                      />
                    )}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {n.name}
                  </TableCell>

                  <TableCell className='truncate' component='th' scope='row'>
                    {n.categories.join(', ')}
                  </TableCell>

                  <TableCell component='th' scope='row' align='right'>
                    <span>$</span>
                    {n.priceTaxIncl}
                  </TableCell>

                  <TableCell component='th' scope='row' align='right'>
                    {n.quantity}
                    <i
                      className={clsx(
                        'inline-block w-8 h-8 rounded ml-8',
                        n.quantity <= 5 && 'bg-red',
                        n.quantity > 5 && n.quantity <= 25 && 'bg-orange',
                        n.quantity > 25 && 'bg-green'
                      )}
                    />
                  </TableCell>

                  <TableCell component='th' scope='row' align='right'>
                    {n.active ? (
                      <Icon className='text-green text-20'>check_circle</Icon>
                    ) : (
                      <Icon className='text-red text-20'>remove_circle</Icon>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      <TablePagination
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page'
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default ProductsTable;

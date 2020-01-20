import React, { Component } from 'react';
import './FakeDbwithMock';
import store from './store';
import AppContext from './AppContext';
import Provider from 'react-redux/es/components/Provider';

import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jssExtend from 'jss-extend';
import { create } from 'jss';

// components

import Layout from './components/Layout';
import Products from './components/products/Products';
import Checkout from './components/checkout/Checkout';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ModernInvoicePage from './components/invoices/Invoice';
import EnhancedTable from './components/ecommerce/commonTable';
import ListUserComponent from './components/users/ListUser';
import AddUserComponent from './components/users/AddUser';
import EditUserComponent from './components/users/EditUser';

import {
  StylesProvider,
  jssPreset,
  createGenerateClassName
} from '@material-ui/styles';

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <StylesProvider jss={jss} generateClassName={generateClassName}>
          <Layout>
            <Switch>
              <Route exact path='/products' component={Products} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route path='/users' component={ListUserComponent} />
              <Route path='/add-user' component={AddUserComponent} />
              <Route path='/edit-user' component={EditUserComponent} />

              <Route
                exact
                path='/apps/ecommerce/invoices'
                component={ModernInvoicePage}
              />
              <Route
                exact
                path='/apps/ecommerce/products'
                component={EnhancedTable}
              />
              <Route
                exact
                path='/apps/ecommerce/orders'
                component={EnhancedTable}
              />
            </Switch>
          </Layout>
        </StylesProvider>
      </BrowserRouter>
    );
  }
}

export default App;
